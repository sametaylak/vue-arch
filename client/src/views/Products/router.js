export default [
    {
        path: '/',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ './Products.vue')
    },
]
