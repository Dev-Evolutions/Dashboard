import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../Components/UserLogin.vue';
import FinancialDashboard from '../Components/FinancialDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: FinancialDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
