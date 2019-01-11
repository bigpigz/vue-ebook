/**
 * Created by BigZ on 2019/1/11.
 */
const book = {
    state: {
        test: 3
    },
    mutations: {
        'SET_TEST': (state, value) => {
            state.test = value
        }
    },
    actions: {
        setTest: ({commit, state}, value) => {
            console.log(state.test, value);
            return commit('SET_TEST',value)
        }
    }
}
export default book