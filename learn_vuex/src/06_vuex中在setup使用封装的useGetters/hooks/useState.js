import useMap from './useMap'
import { mapState } from 'vuex'

export default function (iterators) {
   return useMap(iterators, mapState) //传mapState函数
}