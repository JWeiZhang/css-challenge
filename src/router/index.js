import Vue from 'vue'
import Router from 'vue-router'

import Day1 from '@/components/Day1'
import Day2 from '@/components/Day2'
import Day3 from '@/components/Day3'
import Day4 from '@/components/Day4'
import Day5 from '@/components/Day5'
import Day6 from '@/components/Day6'

Vue.use(Router)

export default new Router({
  routes: [{
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
    },
    {
      path: '/Day4',
      name: 'Day4',
      component: Day4
    },
    {
      path: '/Day5',
      name: 'Day5',
      component: Day5
    },
    {
      path: '/Day6',
      name: 'Day6',
      component: Day6
    }
  ]
})
