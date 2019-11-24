import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import localForage from 'localforage'
import ORM from '@/orm'

import session from './session'

Vue.use(Vuex)

const hardPersistence = new VuexPersist({
    storage: localForage,
    asyncStorage: true,
    modules: ['db']
})

const softPersistence = new VuexPersist({
    storage: localStorage,
    modules: ['session']
})

export default new Vuex.Store({
    plugins: [
        ORM(),
        hardPersistence.plugin,
        softPersistence.plugin
    ],
    modules: {
        ...session
    }
})
