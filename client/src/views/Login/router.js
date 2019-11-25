export default [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ './Login.vue')
    }
]
