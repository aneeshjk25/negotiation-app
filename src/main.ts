import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueResource);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
