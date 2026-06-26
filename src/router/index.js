import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ProjectsContentView from '@/views/ProjectsContentView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexView,
    },
    {
      path: '/skills',
      component: SkillsView,
    },
    {
      path: '/projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:id',
      component: ProjectsContentView,
      props: true,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  }
})

export default router
