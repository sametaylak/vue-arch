<template>
    <div class="brands">
        <span v-if="isLoading">Loading...</span>
        <ul v-else-if="brands">
            <li v-for="brand in brands" :key="brand.id">
                #{{ brand.id }} - {{ brand.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import dependsOn from '@/mixins/dependsOn'

export default {
    name: 'Brands',
    mixins: [
        dependsOn('Brand')
    ],
    computed: {
        brands() {
            return this.brandsAll()
        },
        isLoading() {
            return this.$wait.is([
                'BrandFetch'
            ])
        }
    }
}
</script>
