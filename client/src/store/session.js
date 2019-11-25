import axios from 'axios';

export default {
    session: {
        namespaced: true,
        state: {
            accessToken: null,
        },
        getters: {
            accessToken: state => state.accessToken,
            isLoggedIn: state => state.accessToken !== null,
        },
        actions: {
            async login ({ commit }, { email, password }) {
                const response = await axios.post('http://localhost:3000/auth/login', {
                    email, password
                }, {
                    'Content-Type': 'application/json'
                })

                commit('SET_ACCESS_TOKEN', response.data.accessToken)
            },
            async logout () {
            },
        },
        mutations: {
            SET_ACCESS_TOKEN (state, accessToken) {
                state.accessToken = accessToken
            },
        }
    }
}
