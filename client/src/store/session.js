export default {
    session: {
        namespaced: true,
        state: {
            currentUser: null,
        },
        getters: {
            isLoggedIn: state => state.currentUser !== null,
        },
        actions: {
            async login () {
                //TODO: login
            },
            async logout () {
                //TODO: logout
            },
        },
        mutations: {
            setCurrentUser (state, currentUser) {
                state.currentUser = currentUser
            },
        }
    }
}
