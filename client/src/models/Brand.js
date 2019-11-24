import { Model } from '@vuex-orm/core'

export default class Brand extends Model {
    static entity = 'brands'

    static fields () {
        return {
            id: this.attr(null),
            name: this.attr('')
        }
    }

    static apiConfig = {
        baseURL: 'http://localhost:3000/brands',
        actions: {
            fetch() {
                return this.get()
            }
        }
    }
}

