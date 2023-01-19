import { createRouter, createWebHistory } from 'vue-router'
import OrganizationsList from '@/components/OrganizationsList.vue'
import OrganizationItem from '@/components/OrganizationItem.vue'
import PurchasesList from '@/components/PurchasesList.vue'
import PurchaseItem from "@/components/PurchaseItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
            path: '/',
            name: 'HomePage',
            component: OrganizationsList
        },
        {
            path: '/organizations',
            name: 'organizationList',
            component: OrganizationsList
        },
        {
            path: '/organizations/:id',
            name: 'organizationItem',
            component: OrganizationItem
        },
        {
            path: '/purchases',
            name: 'purchasesList',
            component: PurchasesList
        },
        {
            path: '/purchases/:id',
            name: 'purchaseItem',
            component: PurchaseItem
        }
  ]
})

export default router
