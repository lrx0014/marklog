// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import HeaderNav from '@/components/header/HeaderNav';
import Logo from '@/components/logo/Logo';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(mavonEditor);

Vue.component('header-nav', HeaderNav);
Vue.component('logo', Logo);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
