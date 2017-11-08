import Vue from 'vue'
import Router from 'vue-router'
import app from '../app'
import jsx from '../components/hello_JSX'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    }, {
      path: '/jsx',
      name: 'jsx_demo',
      component: jsx
    }
  ]
})
