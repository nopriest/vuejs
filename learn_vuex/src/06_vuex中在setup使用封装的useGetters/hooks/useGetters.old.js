import {computed} from 'vue'
import {useStore, mapGetters} from 'vuex'

export default function (states) {
    //获取store对象
    const store = useStore()
    //拿到state对应的fns对象
    const mappedStateFns = mapGetters(states);
  
      const mappedStates = {};
      Object.keys(mappedStateFns).forEach((fnKey) => {
        const fn = mappedStateFns[fnKey].bind({ $store: store });
        mappedStates[fnKey] = computed(fn);
      });

    return mappedStates
}