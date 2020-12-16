<template>
    <div>
        <v-card-title class="d-flex justify-center my-0 px-0" :style="textColor" v-if="this.date">{{ date }}</v-card-title>
        <v-card-title v-if="!this.date" :style="textColor" class="d-flex justify-center ma-auto">loading   
            <v-progress-circular
            indeterminate
            color="color"
            ></v-progress-circular>
        </v-card-title>

        <v-card-text class="ma-0 py-0" :style="textColor">
            <v-container class="pa-0 ma-0">
                <v-row align="center" class="d-flex justify-center ma-0"> 
                    <v-col cols-6 justify-center class="pl-4 pr-0 py-0">
                        <v-row id="temperature" row-8 class="display-1 justify-center">
                        {{temperature}}&deg;C
                        </v-row>

                        <v-row id="coordEtVent" rows-1 class="justify-center">
                        <p class="caption ma-0 pa-0 ">{{place}} lat:{{latitude}},lon:{{longitude}}</p> 
                        </v-row>

                        <v-row rows-1 class="justify-center">
                            <v-icon :style="textColor">mdi-windsock</v-icon>{{vent}}km/h
                        </v-row>
                        <v-row v-if="this.horloge" rows-1 class="justify-center font-weight-bold">
                            {{horloge}}
                        </v-row>

                        <v-row v-if="!this.horloge" rows-1 class="justify-center caption"> 
                            loading
                        </v-row>
                    </v-col>

                    <v-col  cols-6 class="justify-center pa-0">
                        <v-img
                        id="imageSVG"
                        :src="imageMeteo()" :alt="imageMeteo()"
                        width="60%"
                        class="ma-auto"
                        :style="weatherIconeColor"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                                >
                                    <v-progress-circular
                                    indeterminate
                                    color="color"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default{
    data: () => ({
        horloge: null,
        date: null,
        temperature: '?',
        longitude: '?',
        latitude: '?',
        place: '?',
        vent: '?'
    }),
    methods: {
        updateDateActuel(){
            this.date = moment().locale('fr').format('dddd DD MMMM YYYY');
        },
        updatehorlogeActuel(){
            this.horloge = moment().locale('fr').format('HH:MM ss')
        },
        imageMeteo(){
            return require(`@/assets/weather/${this.$store.state.icon}.png`)
        },
        DataTransfer(){
        
        this.temperature = this.$store.state.temperature,
        this.longitude = this.$store.state.longitude,
        this.latitude = this.$store.state.latitude,
        this.place = this.$store.state.place,
        this.vent = this.$store.state.vent
        }
    },
    mounted(){
        this.$store.dispatch('meteoLoad')
        setInterval(() => this.updatehorlogeActuel(), 1000);
        setInterval(() => this.updateDateActuel(), 1000);
    },

    computed:{
        ...mapState({
            wallpaperVerticalLightColor: state => state.wallpaperVerticalLight.colorFocus,
            wallpaperVerticalDarkColor: state => state.wallpaperVerticalDark.colorVive,
            wallpaperHorizontalLightColor: state => state.wallpaperHorizontalLight.colorFocus,
            wallpaperHorizontalDarkColor: state => state.wallpaperHorizontalDark.colorVive,
            orientation: state => state.orientation,
            theme: state => state.theme,
        }),
        textColor(){
            if(this.$vuetify.breakpoint.name == 'xs'){
                if(this.theme == 'light') return `color: ${this.wallpaperVerticalLightColor};`
                else return `color: ${this.wallpaperVerticalDarkColor};`
            }
            else{
                if(this.theme == 'light'){
                    if(this.orientation == 'verticale') return `color: ${this.wallpaperVerticalLightColor};`
                    else return `color: ${this.wallpaperHorizontalLightColor};`
                }
                else{
                    if(this.orientation == 'verticale') return `color: ${this.wallpaperVerticalDarkColor};`
                    else return `color: ${this.wallpaperHorizontalDarkColor};`
                }
            }
        },
        color(){
            if(this.$vuetify.breakpoint.name == 'xs'){
                if(this.theme == 'light') return this.wallpaperVerticalLightColor
                else return this.wallpaperVerticalDarkColor
            }
            else{
                if(this.theme == 'light'){
                    if(this.orientation == 'verticale') return this.wallpaperVerticalLightColor
                    else return this.wallpaperHorizontalLightColor
                }
                else{
                    if(this.orientation == 'verticale') return this.wallpaperVerticalDarkColor
                    else return this.wallpaperHorizontalDarkColor
                }
            }
        },
        weatherIconeColor(){
            if(this.theme == 'light') return `filter: brightness(0)`
            else return `filter: brightness(100)`
        },
    },
    created: function () {
        if(this.temperature === '?'){
            setInterval(() => this.DataTransfer(), 1000);
        }
    }
}
</script>


