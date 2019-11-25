<template>
    <div class="products">
        <span v-if="isLoading">Loading...</span>
        <ul v-else-if="products">
            <li v-for="product in products" :key="product.id">
                #{{ product.id }} - {{ product.name }}
                <template v-if="editedProcuductId === product.id">
                    <input type="text" v-model="editedProduct.name" />
                    <button @click="updateProduct()">Update</button>
                </template>
                <button @click="deleteProduct(product.id)">Delete</button>
                <button @click="editedProcuductId = product.id; editedProduct.name = product.name">Edit</button>
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
            editedProcuductId: -1,
            editedProduct: {
                name: ''
            },
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
        },
        deleteProduct(id) {
            this.productsDelete(id)
        },
        updateProduct() {
            this.productsUpdate(this.editedProcuductId, this.editedProduct)
        }
    }
}
</script>
