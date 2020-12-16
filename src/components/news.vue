<template>
  <div class="dropdownMenu">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          block
          text 
          :color="couleurs"
        >
          News
        </v-btn>
      </template>
      <v-list class="ma-0 pa-0">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :href="item.link"
          class="ma-0 pa-0"
        >
          <v-list-item-content  class="ma-0 pa-0 text-center" >
            <v-list-item-title class="ma-0 pa-0" :style="menuCouleursTitleTypo" dense v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Menu from '/home/romain/Bureau/.newTabPageData/menus.json'

import {mapState} from 'vuex'

export default {
  data: () => ({
    items: Menu.news
  }),
  computed:{
    ...mapState({
      wallpaperVerticalLight: state => state.wallpaperVerticalLight,
      wallpaperVerticalDark: state => state.wallpaperVerticalDark,
      wallpaperHorizontalLight: state => state.wallpaperHorizontalLight,
      wallpaperHorizontalDark: state => state.wallpaperHorizontalDark,
    }),
    couleurs(){
      if(this.$vuetify.breakpoint.name == 'xs'){
        if(this.$store.state.theme == 'light') return this.wallpaperVerticalLight.colorFocus
        else return this.wallpaperVerticalDark.colorVive
      }
      else{
        if(this.$store.state.theme == 'light'){
          if(this.$store.state.orientation == 'verticale') return this.wallpaperVerticalLight.colorFocus;
          else return this.wallpaperHorizontalLight.colorFocus;
        }
        else{
          if(this.$store.state.orientation == 'verticale') return this.wallpaperVerticalDark.colorVive
          else return this.wallpaperHorizontalDark.colorVive;
        }
      }
    },
    
    menuCouleursTitleTypo(){

      if(this.$store.state.theme == 'light'){
          if(this.$store.state.orientation == 'verticale') return `color: ${this.wallpaperVerticalLight.colorFocus};`
          else return `color ${this.wallpaperHorizontalLight.colorFocus}`;
      }
      else{
        if(this.$store.state.orientation == 'verticale') return `color: ${this.wallpaperVerticalDark.colorFocus}`
        else return `${this.wallpaperHorizontalDark.colorFocus}`;
      }
    }
  }
}
</script>