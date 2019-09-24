import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Money from '@/components/money/index.vue'

// import Ious from '../ious/index.vue'
// import Raise from '../raise/index.vue'
// import Download from '../special/download.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    }
  ]
})
// , {
//   path: "/ious",
//   name: "ious",
//   component: Ious,
// }, {
//   path: "/raise",
//   name: "raise",
//   component: Raise,
// }, {
//   path: "/download",
//   name: "download",
//   component: Download,
// },
