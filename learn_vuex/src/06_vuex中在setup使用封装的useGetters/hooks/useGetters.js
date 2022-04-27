import useMap from './useMap'
import { mapGetters } from 'vuex'

export default function (iterators) {
   return useMap(iterators, mapGetters)
}