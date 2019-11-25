const fs = require('fs')
const path = require('path')
const views = fs.readdirSync(`${__dirname}/../views`)

let code = `
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []

`

views.forEach(view => {
    const viewPath = path.resolve(`${__dirname}/../views`, view)
    const viewFiles = fs.readdirSync(viewPath)

    if (viewFiles.includes('router.js')) {
        code += `
        import ${view}Router from '@/views/${view}/router'

        routes = routes.concat(${view}Router)
        `
    }
})

module.exports = `
${code}

const router = new VueRouter({
    routes
})

export default router
`
