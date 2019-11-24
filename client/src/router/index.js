import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
    },
    {
        path: '/brands',
        name: 'brands',
        component: () => import(/* webpackChunkName: "brands" */ '../views/Brands.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
