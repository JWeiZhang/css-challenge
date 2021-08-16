import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Day1',
    name: 'Day1',
    component: () => import('@/components/Day1.vue'),
  },
  {
    path: '/Day2',
    name: 'Day2',
    component: () => import('@/components/Day2.vue'),
  },
  {
    path: '/Day3',
    name: 'Day3',
    component: () => import('@/components/Day3.vue'),
  },
  {
    path: '/Day4',
    name: 'Day4',
    component: () => import('@/components/Day4.vue'),
  },
  {
    path: '/Day5',
    name: 'Day5',
    component: () => import('@/components/Day5.vue'),
  },
  {
    path: '/Day6',
    name: 'Day6',
    component: () => import('@/components/Day6.vue'),
  },
  {
    path: '/Day7',
    name: 'Day7',
    component: () => import('@/components/Day7.vue'),
  },
  {
    path: '/Day8',
    name: 'Day8',
    component: () => import('@/components/Day8.vue'),
  },
  {
    path: '/Slot',
    name: 'Slot',
    component: () => import('@/components/Slot.vue'),
  },
]

const router = createRouter({ history: createWebHistory(), routes })

export { router }
