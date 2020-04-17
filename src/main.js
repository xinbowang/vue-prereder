/*
 * @Author: your name
 * @Date: 2020-04-16 16:36:03
 * @LastEditTime: 2020-04-16 16:38:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \by-object\src\main.js
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MetaInfo from 'vue-meta-info';
import axios from 'axios';
import { Button, Table } from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);

// import style
import 'view-design/dist/styles/iview.css';

// Vue.use(ViewUI);
Vue.use(MetaInfo);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app')