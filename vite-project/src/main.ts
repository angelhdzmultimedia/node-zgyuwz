import Vue from 'vue';
import App from './App.vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
new Vue({
  el: '#app',
  render: (h) => h(App),
});
