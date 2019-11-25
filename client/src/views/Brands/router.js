export default [
    {
        path: '/brands',
        name: 'brands',
        component: () => import(/* webpackChunkName: "brands" */ './Brands.vue')
    }
]
