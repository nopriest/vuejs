import {computed} from 'vue'
import {useStore} from 'vuex'

export default function (iterators, mapFn) {
    //获取store对象
    const store = useStore()
    //拿到state对应的fns对象
    const mappedFns = mapFn(iterators);
  
      const mapped = {};
      Object.keys(mappedFns).forEach((fnKey) => {
        const fn = mappedFns[fnKey].bind({ $store: store });
        mapped[fnKey] = computed(fn);
      });

    return mapped
}