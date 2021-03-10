// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Chargement from "./Chargement";
import Footer from "./Footer";
import Nav from "./Nav";
import router from './router';
import AOS from "aos";
import "aos/dist/aos.css";


Vue.config.productionTip = true



// Import de Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
// Bibliothèque de Bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Utilisation de Bootstrap-vue
Vue.use(BootstrapVue);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created() {
    AOS.init();
  },
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
new Vue({
  router,
  components: {Chargement},
  template: '<chargement/>'
})
new Vue({
  router,
  components: { Footer },
  template: '<Footer/>'
})
new Vue({
  router,
  components: { Nav },
  template: '<Nav/>'
})
