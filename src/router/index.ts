import nProgress from 'nprogress'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('/src/pages/Home.vue'),

  },
  {
    path: '/about',
    name: 'about',
    component: () => import('/src/pages/About.vue'),
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('/src/pages/Welcome.vue'),
  },
]

const _router = createRouter({
  history: createWebHistory(),
  routes,
})

_router.beforeEach((to, from) => {
  if (to.path !== from.path)
    nProgress.start()
})
_router.afterEach(() => { nProgress.done() })

export const router = _router
