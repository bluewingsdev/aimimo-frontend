import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import "@/assets/scss/_variabled.scss";
import "@/assets/scss/common.scss";

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");