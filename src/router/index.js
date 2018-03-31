import Vue from 'vue'
import Router from 'vue-router'

import Day1 from '@/components/Day1'
import Day2 from '@/components/Day2'
import Day3 from '@/components/Day3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Day1',
      name: 'Day1',
      component: Day1
    },
    {
      path: '/Day2',
      name: 'Day2',
      component: Day2
    },
    {
      path: '/Day3',
      name: 'Day3',
      component: Day3
    }
  ]
})
