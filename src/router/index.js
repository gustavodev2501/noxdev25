import { createRouter, createWebHistory } from 'vue-router';
import HomepageComponent from '../components/HomepageComponent.vue';

const routes = [
  {
    path: '/',
    name: 'HomepageComponent',
    component: HomepageComponent,
    meta: { title: 'NoxDev - Excelência em Landing Pages e Serviços de Programação de Alta Qualidade' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  const defaultTitle = 'Minha Aplicação';
  document.title = to.meta.title || defaultTitle;
}); 

export default router;
