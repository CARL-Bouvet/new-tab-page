<template>
  <v-main id="main" fluid :style="mainBackground">
    <v-container id="mobile" fluid class="ma-0 pa-0 " :style="verticaleBackground" d-flex d-sm-none > <!-- le contenu de la page pour mobile-->
      <v-card
      class="ma-auto"
      max-width="300px"
      :color="labelBackgroundMobilePetitEtMedium"
      >
        <Entete/>
        <v-container id="switchContainer" class="mt-4 pa-0">
          <v-row >
            <v-col cols-6 class="d-flex justify-center ma-0 pa-0">
              <v-switch
              v-model="bool"
              :color="couleurs"
              dense
              class="ma-0 pa-0"
              >
                <template v-slot:label>
                  <p class="ma-0 caption" :style="`color: ${couleurs}`">{{label}}</p>
                </template>
              </v-switch>
            </v-col>
            <v-col cols-6 class="d-flex justify-center mx-2 pa-0">
              <v-switch
              v-model="bool2"
              :color="couleurs"
              disabled
              dense
              class="ma-0 pa-0"
              >
                <template v-slot:label>
                  <p class="ma-0 caption" :style="`color: ${couleurs}; filter: blur(0.8px); ` ">{{orientation}}</p>
                </template>
              </v-switch>
              
            </v-col>
          </v-row> 
        </v-container>

        <div class="d-flex justify-space-around mx-4 py-0">
          <v-btn small fab text href="https://www.facebook.com/"><v-icon :color="couleurs">mdi-facebook</v-icon></v-btn>
          <v-btn small fab text href="https://www.instagram.com/"> <v-icon :color="couleurs">mdi-instagram</v-icon></v-btn>
          <v-btn small fab text href="https://www.twitch.tv/"><v-icon :color="couleurs">mdi-twitch</v-icon></v-btn>
          <v-btn small fab text href="https://twitter.com/"><v-icon :color="couleurs">mdi-twitter</v-icon></v-btn>
          <v-btn small fab text href="https://www.reddit.com/"><v-icon :color="couleurs">mdi-reddit</v-icon></v-btn>
          <v-btn small fab text href="https://www.youtube.com/results?search_query=fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck"><v-icon :color="couleurs">mdi-youtube</v-icon></v-btn>
          <v-btn small fab text href="https://www.amazon.fr/gp/css/homepage.html?from=hz"><v-icon :color="couleurs">mdi-amazon</v-icon></v-btn>
        </div>

        <div id="cadreBarreUrl" class="mx-5 my-2" :style="`border-style: solid; border-color: ${couleurs};`">
          <v-form method="get" action="https://duckduckgo.com/" ><!-- la classe! -->
            <input type="text" id="inputText" :style="`width:85%; box-sizing: border-box; margin-left:5px; outline: none !important; color: ${couleurs};`" name="q"  autocomplete="off" placeholder="  Search" /><v-icon right class="pa-0" :color="couleurs" >mdi-search-web</v-icon>
          </v-form>
        </div>

        <div id="boutonMenus" class="pb-3">
          <News/>
          <Research/>
          <Programming/>
          <usefullLink/>
        </div>
      </v-card>
    </v-container> 


    <v-container id="mainBackground" fluid class="ma-0 pa-0" d-none d-sm-flex d-md-none> <!-- cadre pour resolutions d'ecrans petit à moyen -->
      <div class="ma-auto pa-0">
        <v-row>
          <v-col cols-6 >
            <v-card :color="labelBackgroundMobilePetitEtMedium" flat>

            <Entete/>
            <v-container id="switchContainer" class=" mt-4 pa-0">
              <v-row >
                <v-col cols-6 class="d-flex justify-center ma-0 pa-0"> 
                  <v-switch
                  v-model="bool"
                  :color="couleurs"
                  dense
                  class="ma-0 pa-0"
                  >
                    <template v-slot:label>
                      <p class="ma-0 caption" :style="`color: ${couleurs}`">{{label}}</p>
                    </template>
                  </v-switch>
                </v-col>
                <v-col cols-6 class="d-flex justify-center mx-2 pa-0"> 
                  <v-switch
                  v-model="bool2"
                  :color="couleurs"
                  dense
                  class="ma-0 pa-0"
                  >
                    <template v-slot:label>
                      <p class="ma-0 caption" :style="`color: ${couleurs}`">{{orientation}}</p>
                    </template>
                  </v-switch>

                </v-col>
              </v-row> 
            </v-container> 
            <div class="d-flex justify-space-around mx-4 py-0">
              <v-btn small fab text href="https://www.facebook.com/"><v-icon :color="couleurs">mdi-facebook</v-icon></v-btn>
              <v-btn small fab text href="https://www.instagram.com/"> <v-icon :color="couleurs">mdi-instagram</v-icon></v-btn>
              <v-btn small fab text href="https://www.twitch.tv/"><v-icon :color="couleurs">mdi-twitch</v-icon></v-btn>
              <v-btn small fab text href="https://twitter.com/"><v-icon :color="couleurs">mdi-twitter</v-icon></v-btn>
              <v-btn small fab text href="https://www.reddit.com/"><v-icon :color="couleurs">mdi-reddit</v-icon></v-btn>
              <v-btn small fab text href="https://www.youtube.com/results?search_query=fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck"><v-icon :color="couleurs">mdi-youtube</v-icon></v-btn>
              <v-btn small fab text href="https://www.amazon.fr/gp/css/homepage.html?from=hz"><v-icon :color="couleurs">mdi-amazon</v-icon></v-btn>
            </div>
            <div id="cadreBarreUrl" class="mx-5 my-2" :style="`border-style: solid; border-color: ${couleurs};`">
              <v-form method="get" action="https://duckduckgo.com/" >
                <input type="text" id="inputText" :style="`width:85%; box-sizing: border-box; margin-left:5px; outline: none !important; color: ${couleurs};`" name="q"  autocomplete="off" placeholder="  Search" /><v-icon right class="pa-0" :color="couleurs" >mdi-search-web</v-icon>
              </v-form>
            </div>
            <div id="boutonMenus" class="pb-3">
              <News/>
              <Research/>
              <Programming/>
              <usefullLink/>
            </div>
            </v-card>
          </v-col>
          <v-col v-if=" bool2==true" cols-6 :style="verticaleBackground" class="ma-0 pa-0" id="cadreImageOrientationVerticale">
          </v-col>
        </v-row>
        
      </div>  
    </v-container>

  <v-container id="mainBackground" fluid class="ma-0 pa-0" d-none d-md-flex > <!-- cadre pour resolutions d'ecrans large à plus-->
    <div v-if="bool2 == true" class="ma-auto pa-0" :style="labelBackgroundLargeScreen">

      <v-row  v-if="bool2 == true"> <!-- pour verticale -->
        <v-col cols="6" class="d-flex justify-end">
          <div class="my-auto pr-2" >
            <Entete/>
            <v-container id="switchContainer" class=" mt-4 pa-0">
              <v-row align="center">
                <v-col cols-6 class="d-flex justify-center  ma-0 pa-0"> 
                  <v-switch
                  v-model="bool"
                  :color="couleurs"
                  dense
                  class="ma-0 pa-0"
                  >
                    <template v-slot:label>
                      <p class="ma-0 caption" :style="`color: ${couleurs}`">{{label}}</p>
                    </template>
                  </v-switch>
                </v-col>
                <v-col cols-6 class="d-flex justify-center mx-2 pa-0"> 
                  <v-switch
                  v-model="bool2"
                  :color="couleurs"
                  dense
                  class="ma-0 pa-0"
                  >
                    <template v-slot:label>
                      <p class="ma-0 caption" :style="`color: ${couleurs}`">{{orientation}}</p>
                    </template>
                  </v-switch>

                </v-col>
              </v-row> 
            </v-container> 
            <div class="d-flex justify-space-around mx-4 py-0">
              <v-btn small fab text href="https://www.facebook.com/"><v-icon :color="couleurs">mdi-facebook</v-icon></v-btn>
              <v-btn small fab text href="https://www.instagram.com/"> <v-icon :color="couleurs">mdi-instagram</v-icon></v-btn>
              <v-btn small fab text href="https://www.twitch.tv/"><v-icon :color="couleurs">mdi-twitch</v-icon></v-btn>
              <v-btn small fab text href="https://twitter.com/"><v-icon :color="couleurs">mdi-twitter</v-icon></v-btn>
              <v-btn small fab text href="https://www.reddit.com/"><v-icon :color="couleurs">mdi-reddit</v-icon></v-btn>
              <v-btn small fab text href="https://www.youtube.com/results?search_query=fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck"><v-icon :color="couleurs">mdi-youtube</v-icon></v-btn>
              <v-btn small fab text href="https://www.amazon.fr/gp/css/homepage.html?from=hz"><v-icon :color="couleurs">mdi-amazon</v-icon></v-btn>
            </div>
            <div id="cadreBarreUrl" class="mx-5 my-2" :style="`border-style: solid; border-color: ${couleurs};`">
              <v-form method="get" action="https://duckduckgo.com/" >
                <input type="text" id="inputText" :style="`width:85%; box-sizing: border-box; margin-left:5px; outline: none !important; color: ${couleurs};`" name="q"  autocomplete="off" placeholder="  Search" /><v-icon right class="pa-0" :color="couleurs" >mdi-search-web</v-icon>
              </v-form>
            </div>
            <div id="boutonMenus" class="my-2">
              <News/>
              <Research/>
              <Programming/>
              <usefullLink/>
            </div>
          </div>       
        </v-col>
        
        <v-col v-if="bool2==true" cols="6"  class="ma-0 pl-10 d-flex align-center">
          <div id="cadreImageOrientationVerticaleGrandEcran" :style="verticaleBackground"></div>
        </v-col>

        
      </v-row>
    </div>

    <div v-if="bool2 == false" class="ma-auto pa-0" :style="labelBackgroundLargeScreen"><!-- pour horizontale-->
      <v-row>
      
        <v-col cols-6 >

          <Entete/>
          <v-container id="switchContainer" class=" mt-4 pa-0">
            <v-row >
              <v-col cols-6 class="d-flex justify-center ma-0 pa-0"> 
                <v-switch
                v-model="bool"
                :color="couleurs"
                dense
                class="ma-0 pa-0"
                >
                  <template v-slot:label>
                    <p class="ma-0 caption" :style="`color: ${couleurs}`">{{label}}</p>
                  </template>
                </v-switch>
              </v-col>
              <v-col cols-6 class="d-flex justify-center mx-2 pa-0"> 
                <v-switch
                v-model="bool2"
                :color="couleurs"
                dense
                class="ma-0 pa-0"
                >
                  <template v-slot:label>
                    <p class="ma-0 caption" :style="`color: ${couleurs}`">{{orientation}}</p>
                  </template>
                </v-switch>

              </v-col>
            </v-row> 
          </v-container> 
          <div class="d-flex justify-space-around mx-4 py-0">
            <v-btn small fab text href="https://www.facebook.com/"><v-icon :color="couleurs">mdi-facebook</v-icon></v-btn>
            <v-btn small fab text href="https://www.instagram.com/"> <v-icon :color="couleurs">mdi-instagram</v-icon></v-btn>
            <v-btn small fab text href="https://www.twitch.tv/"><v-icon :color="couleurs">mdi-twitch</v-icon></v-btn>
            <v-btn small fab text href="https://twitter.com/"><v-icon :color="couleurs">mdi-twitter</v-icon></v-btn>
            <v-btn small fab text href="https://www.reddit.com/"><v-icon :color="couleurs">mdi-reddit</v-icon></v-btn>
            <v-btn small fab text href="https://www.youtube.com/results?search_query=fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck"><v-icon :color="couleurs">mdi-youtube</v-icon></v-btn>
            <v-btn small fab text href="https://www.amazon.fr/gp/css/homepage.html?from=hz"><v-icon :color="couleurs">mdi-amazon</v-icon></v-btn>
          </div>
          <div id="cadreBarreUrl" class="mx-5 my-2" :style="`border-style: solid; border-color: ${couleurs};`">
            <v-form method="get" action="https://duckduckgo.com/" >
              <input type="text" id="inputText" :style="`width:85%; box-sizing: border-box; margin-left:5px; outline: none !important; color: ${couleurs};`" name="q"  autocomplete="off" placeholder="  Search" /><v-icon right class="pa-0" :color="couleurs" >mdi-search-web</v-icon>
            </v-form>
          </div>
          <div id="boutonMenus" class="my-2">
            <News/>
            <Research/>
            <Programming/>
            <usefullLink/>
          </div>
        
        </v-col>
      </v-row>
    </div>  
  </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import entete from "@/components/entete"
import news from "@/components/news"
import programming from "@/components/programming"
import usefulllink from "@/components/usefulllink"
import research from "@/components/research"

export default {
  data: () => ({
      bool: true,
      label: 'light', 
      bool2: true,
      orientation: 'verticale',
  }),
  components:{
    Entete: entete,
    News : news,
    Programming: programming,
    UsefullLink: usefulllink,
    Research: research,
  },
  computed: {
    ...mapState({
      wallpaperVerticalLight: state => state.wallpaperVerticalLight,
      wallpaperVerticalDark: state => state.wallpaperVerticalDark,
      wallpaperHorizontalLight: state => state.wallpaperHorizontalLight,
      wallpaperHorizontalDark: state => state.wallpaperHorizontalDark,
    }),
    verticaleBackground(){
      if(this.bool == true){
        return `background-image: url('${this.wallpaperVerticalLight.link}'); background-size:cover;`
      }
      else{
        return `background-image: url('${this.wallpaperVerticalDark.link}'); background-size:cover;`
      }
    },
    couleurs(){
      if(this.$vuetify.breakpoint.name == 'xs'){
        if(this.label == 'light') return this.wallpaperVerticalLight.colorFocus
        else return this.wallpaperVerticalDark.colorVive
      }
      else{

        if(this.label == 'light'){
          if(this.orientation == 'verticale') return this.wallpaperVerticalLight.colorFocus;
          else return this.wallpaperHorizontalLight.colorFocus;
        }
        else{
          if(this.orientation == 'verticale') return this.wallpaperVerticalDark.colorVive;
          else return this.wallpaperHorizontalDark.colorVive;
        }
      }
    },
    mainBackground(){
      if(this.bool == true){
        if(this.bool2 == true) return `background-color: white;`
        else return `background-image: url('${this.wallpaperHorizontalLight.link}'); background-size:cover;` 
      }
      else{
        if(this.bool2 == true) return `background-color: #303030;`
        else return `background-image: url('${this.wallpaperHorizontalDark.link}'); background-size:cover;`
      }
    },
    labelBackgroundLargeScreen(){
      if(this.label == 'light'){
        return `background-color: white;`
      }
      else{
        if(this.orientation == 'verticale') return`background-color: rgba(0, 0, 0, 0);`
        else return`background-color: rgba(0, 0, 0, 0.6);`
      }
    },
    labelBackgroundMobilePetitEtMedium(){
      if(this.$vuetify.breakpoint.name == 'xs'){
        if(this.label == 'light'){
          return `white`
        }
        else{
          return`rgba(0, 0, 0, 0.6)`
        }
      }
      else{
        if(this.label == 'light'){
          return 'white'
        }
        else{
          if(this.bool2 == true){
            return`rgba(0, 0, 0, 0)`
          }
          else{
            return`rgba(0, 0, 0, 0.6)`
          }
        }
      }
    },

  },
  mounted(){
    if(this.$store.state.theme == 'light'){
      this.bool = true
      if(this.$store.state.orientation == 'verticale') this.bool2 = true
      else this.bool2 = false      
    }
    else{
      this.bool = false
      if(this.$store.state.orientation == 'verticale') this.bool2 = true
      else this.bool2 = false   
    }
  },

  watch:{
    bool: function(bool){
      if(bool == true){
        this.$store.commit('changeTheme', 'light');
        this.label = 'light';
      }
      else{
        this.$store.commit('changeTheme', 'dark');
        this.label = 'dark';
      }
    },
    bool2: function(bool2){
      if(bool2 == true){
        this.$store.commit('changeOrientation', 'verticale');
        this.orientation = 'verticale';
      }
      else{
        this.$store.commit('changeOrientation', 'horizontale');
        this.orientation = 'horizontale';
      }
    },
  }
}

</script>
<style lang="scss" scoped>
  #main{
    min-height: 100%;
    
  }
  #mobile {
    min-height: 100%; 

  }
  #mainBackground{
    min-height: 100%; 

  }
   #cadreImageOrientationVerticale{
     width: 350px;
  }
  #cadreImageOrientationVerticaleGrandEcran
  {
    width: 400px;
    min-height: 800px;
  }


  #cadreBarreUrl:focus{
    border: 5px solid white;
  }
  #text:focus{
    font-size: 12px;
  }
  ::-webkit-input-placeholder{
    font-size: 12px;

  } 
  :-ms-input-placeholder {
    font-size: 12px;
  }

  ::-moz-placeholder{
      font-size: 12px;

  }

</style>