import { Model } from '@vuex-orm/core'

export default class Product extends Model {
    static entity = 'products'

    static fields () {
        return {
            id: this.attr(null),
            name: this.attr(''),
            cost: this.attr(0),
            quantity: this.attr(0)
        }
    }

    static apiConfig = {
        baseURL: 'http://localhost:3000/products',
        actions: {
            fetch() {
                return this.get()
            },
            create(product) {
                const newProduct = new Product(product)
                return this.post('/', newProduct)
            },
            deleteById(id) {
                this.delete(`/${id}`)
            },
            updateById(id, product) {
                const updatedProduct = new Product(product)
                this.put(`/${id}`, updatedProduct)
            }
        }
    }
}

