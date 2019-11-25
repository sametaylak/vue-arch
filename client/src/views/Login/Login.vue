<template>
    <div>
        <h3>Login</h3>
        <form @submit.prevent="onLoginSubmit">
            <input type="email" v-model="user.email">
            <input type="password" v-model="user.password">
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('session', [
            'login'
        ]),
        onLoginSubmit() {
            this.login(this.user)
        }
    }
}
</script>
