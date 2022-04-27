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
    },
    getters: {
        doubleCounter(state) {
            return state.counter*2;
        },
        doubleCounterPlusN(state, getters){
           return function(n){
               return getters.doubleCounter+n
           }
        }
    }
})

export default store