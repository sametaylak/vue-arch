<template>
    <div class="products">
        <span v-if="isLoading">Loading...</span>
        <ul v-else-if="products">
            <li v-for="product in products" :key="product.id">
                #{{ product.id }} - {{ product.name }}
            </li>
        </ul>
        <input type="text" v-model="product.name"/>
        <button @click="addProduct">Add Product</button>
    </div>
</template>

<script>
import dependsOn from '@/mixins/dependsOn'

export default {
    name: 'Products',
    mixins: [
        dependsOn('Product')
    ],
    data() {
        return {
            product: {
                name: ''
            }
        }
    },
    computed: {
        products() {
            return this.productsAll()
        },
        isLoading() {
            return this.$wait.is([
                'ProductFetch',
                'ProductCreate'
            ])
        }
    },
    methods: {
        addProduct() {
            this.productsCreate(this.product)
        }
    }
}
</script>
