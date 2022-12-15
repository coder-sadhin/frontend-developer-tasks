import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue';
import CustomPrice from '../views/CustomPrice.vue';
import CalenderView from '../views/CalenderView.vue';
import MasterPrice from '../views/MasterPrice.vue';
import ReportView from '../views/ReportView.vue';

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/price',
    name: 'masterPrice',
    component: MasterPrice
  },
  {
    path: '/customPrice',
    name: 'customPrice',
    component: CustomPrice
  }
  ,
  {
    path: '/calender',
    name: 'calender',
    component: CalenderView
  }
  ,
  {
    path: '/report',
    name: 'report',
    component: ReportView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
