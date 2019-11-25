import { mapGetters } from 'vuex'
import store from '@/store'

export default function dependsOn (entity) {
    const e = require(`@/models/${entity}`).default
    const entityHolder = e.entity

    const mixin = {
        async beforeMount () {
            await this[`${entityHolder}Fetch`]()
        },
        methods: {
            [`${entityHolder}Fetch`]: async () => {
                try {
                    store.dispatch('wait/start', `${entity}Fetch`, { root: true })
                    await e.api().fetch()
                    store.dispatch('wait/end', `${entity}Fetch`, { root: true })
                } catch (e) {
                    console.error(e)
                } finally {
                    store.dispatch('wait/end', `${entity}Fetch`, { root: true })
                }
            },
            [`${entityHolder}Create`]: async (payload) => {
                try {
                    store.dispatch('wait/start', `${entity}Create`, { root: true })
                    await e.api().create(payload)
                    store.dispatch('wait/end', `${entity}Create`, { root: true })
                } catch (e) {
                    console.error(e)
                } finally {
                    store.dispatch('wait/end', `${entity}Create`, { root: true })
                }
            },
            [`${entityHolder}Delete`]: async (id) => {
                try {
                    store.dispatch('wait/start', `${entity}Delete`, { root: true })
                    await e.api().deleteById(id)
                    e.delete(id)
                    store.dispatch('wait/end', `${entity}Delete`, { root: true })
                } catch (e) {
                    console.error(e)
                } finally {
                    store.dispatch('wait/end', `${entity}Delete`, { root: true })
                }
            }
        },
        computed: {
            ...mapGetters(`db/${entityHolder}`, {
                [`${entityHolder}All`]: 'all'
            })
        }
    }

	return mixin
}
