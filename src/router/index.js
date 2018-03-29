import Vue from 'vue'
import Router from 'vue-router'
import Day1 from '@/components/Day1'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Day1',
    name: 'Day1',
    component: Day1
  }]
})
