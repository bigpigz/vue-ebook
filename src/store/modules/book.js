/**
 * Created by BigZ on 2019/1/11.
 */
const book = {
    state: {
        fileName: '',
        menuVisible:false
    },
    mutations: {
        'SET_FILENAME': (state, fileName) => {
            state.fileName = fileName
        },
        'SET_MENUVISIBLE': (state, menuVisible) => {
            state.menuVisible = menuVisible
        }
    },
    actions: {

    }
}
export default book