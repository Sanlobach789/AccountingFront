import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import OrganizationsView from '@/views/OrganizationsView.vue'
import PurchasesView from '@/views/PurchasesView.vue'
import WarehousesView from '@/views/WarehousesView.vue'

import OrganizationItem from '@/components/OrganizationItem.vue'
import PurchaseItem from '@/components/PurchaseItem.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomeView
        },
        {
            path: '/organizations',
            name: 'organizationView',
            component: OrganizationsView
        },
        {
            path: '/organizations/:id',
            name: 'organizationItem',
            component: OrganizationItem
        },
        {
            path: '/purchases',
            name: 'purchasesView',
            component: PurchasesView
        },
        {
            path: '/purchases/:id',
            name: 'purchaseItem',
            component: PurchaseItem
        },
        {
            path: '/warehouses',
            name: 'WarehousesView',
            component: WarehousesView
        },
    ]
})

export default router
