import Vue from 'vue'
import Vuex from 'vuex'
import jsonImages from '@/assets/newTabPageData/imageAesthetic.json'
import apiWeatherId from '@/assets/newTabPageData/weatherAppKeys.json'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    image: jsonImages.AestheticPics,
    apiWeatherId: apiWeatherId,
    wallpaperVerticalLight: '',
    wallpaperVerticalDark: '',
    wallpaperHorizontalLight: '',
    wallpaperHorizontalDark: '',
    orientation: 'verticale',
    theme: 'light',
  },
  mutations: {
    chooseWallpaper(state){
      var arrayImageVerticaleDark = state.image.filter((pic) => pic.orientation == "verticale" && pic.theme == "dark");
      var arrayImageHorizontaleDark = state.image.filter((pic) => pic.orientation == "horizontale" && pic.theme == "dark");
      var arrayImageVerticaleLight = state.image.filter((pic) => pic.orientation == "verticale" && pic.theme == "light");
      var arrayImageHorizontaleLight = state.image.filter((pic) => pic.orientation == "horizontale" && pic.theme == "light");

      var idxDarkVerticale = Math.floor(Math.random() * arrayImageVerticaleDark.length);
      var idxDarkHorizontale = Math.floor(Math.random() * arrayImageHorizontaleDark.length);
      var idxLightVerticale = Math.floor(Math.random() * arrayImageVerticaleLight.length);
      var idxLightHorizontale = Math.floor(Math.random() * arrayImageHorizontaleLight.length);

      state.wallpaperVerticalDark = arrayImageVerticaleDark[idxDarkVerticale];
      state.wallpaperVerticalLight = arrayImageVerticaleLight[idxLightVerticale];
      state.wallpaperHorizontalLight = arrayImageHorizontaleLight[idxLightHorizontale];
      state.wallpaperHorizontalDark =  arrayImageHorizontaleDark[idxDarkHorizontale];
    },
    changeTheme: (state, newTheme) => {
      return state.theme = newTheme;
    },
    changeOrientation: (state, newOrientation) =>{
      return state.orientation = newOrientation;
    },
    updateMeteoData : (state, dataUpdated) => (
      state.latitude = dataUpdated.coord.lat,
      state.longitude = dataUpdated.coord.lon,
      state.temperature = Math.round(dataUpdated.main.temp - 273.15),
      state.vent = Math.round(dataUpdated.wind.speed * 3.6),
      state.place = dataUpdated.name,
      state.icon = dataUpdated.weather[0].icon
    )
  },
  actions: {
    meteoLoad({commit}){ 
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${apiWeatherId["city-lang"]}&APPID=${apiWeatherId["api-id"]}`)
        .then((response) =>  {
          console.log(response);
          commit('updateMeteoData', response.data);
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
store.commit('chooseWallpaper');
export default store;
