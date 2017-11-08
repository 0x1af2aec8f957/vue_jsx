// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => (
    <div id="app">
      <router-view/>
    </div>
  ),//vue_jsx
  renderError(h, err) {
    return h('pre', {style: {color: 'red'}}, err.stack)//vue_createElement
  }
  /*data: { //自定义一个路由
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return router[this.currentRoute]
    }
  },
  render:h=>h(this.currentRoute)*/
});
