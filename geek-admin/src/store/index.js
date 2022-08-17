/*
 * @Descripttion: 
 * @Date: 2022-08-12 15:24:45
 */
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 66
        }
    },
    getters: {
        double (state) {
            return state.count * 2
        }
    },
    actions: {
        asyncAdd ({ commit }) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        },
        addRouters ({ commit }, accessRoutes) {
            const removeRoutes = []
            accessRoutes.forEach(route => {
                const removeRoute = router.addRoute(route)
                removeRoutes.push(removeRoute)
            })
            commot('SET_REMOVE_ROUTES', removeRoutes)
        }

    },
    mutations: {
        add (state) {
            state.count++
        }
    }
})

export default store