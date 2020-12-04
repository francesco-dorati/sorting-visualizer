import Vue from 'vue';
import {
  ButtonPlugin,
  NavPlugin,
  SidebarPlugin,
  TabsPlugin,
  CardPlugin,
  IconsPlugin,
} from 'bootstrap-vue';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(ButtonPlugin);
Vue.use(NavPlugin);
Vue.use(SidebarPlugin);
Vue.use(TabsPlugin);
Vue.use(CardPlugin);
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
