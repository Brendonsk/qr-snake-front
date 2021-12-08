import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import VueAxios from 'vue-axios'
import router from './router';
import './registerServiceWorker'

axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
  data:{
    token: '',
  },

  mounted(){
    if (localStorage.token) {
      this.token = localStorage.token;      
    }
  },

  watch: {
    token(newToken) {
      localStorage.token = newToken;
    },
  },
  methods: {

  }
}).$mount('#app');

Vue.use(VueAxios, axios)
