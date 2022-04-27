import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            counter:100,
            name: 'hsu',
            age: 18,
            length: 18,
            height:188
        }
    },
    mutations: {
        increment (state) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        }
    }
})

export default store