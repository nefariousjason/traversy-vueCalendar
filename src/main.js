import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDVlJ-IG0yqNGs3CyNGaFfo8m1dQ-Lr0Tw",
  authDomain: "vue-calendar-94849.firebaseapp.com",
  databaseURL: "https://vue-calendar-94849.firebaseio.com",
  projectId: "vue-calendar-94849",
  storageBucket: "vue-calendar-94849.appspot.com",
  messagingSenderId: "186694853220",
  appId: "1:186694853220:web:3f529075617a7a6f07f571"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
