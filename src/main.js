import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/js/amfe_flexible.js'
import './assets/css/normalize.css'
import './assets/css/site.less'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
