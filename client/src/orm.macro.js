const fs = require('fs')
const models = fs.readdirSync(`${__dirname}/models`)

let code = `
import axios from 'axios'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'

import { requestInterceptor, requestInterceptorCatch } from '@/interceptor'

axios.interceptors.request.use(requestInterceptor, requestInterceptorCatch);

VuexORM.use(VuexORMAxios, { axios })

`
models.forEach(model => {
    let modelClass = model.replace('.js', '')
    code += `
    import ${modelClass} from '@/models/${modelClass}'

    if (!${modelClass}.abstract) {
        database.register(${modelClass})
    }
    `
})

module.exports = `
const database = new VuexORM.Database()
${code}

export default function () {
    return VuexORM.install(database, {
        namespace: 'db'
    })
}
`
