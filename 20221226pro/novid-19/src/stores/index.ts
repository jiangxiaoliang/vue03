import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject, Children, ChinaAdd, ChinaTotal, StatisGradeCityDetail } from './type'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useNovidDataStore = defineStore('novidData', {
  state: () => {
   return {
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
    cityDetail: <StatisGradeCityDetail[]>[]
   }
  },
  actions: {
    async getList() {
      const rs = await getApiList()
      this.list = rs
      // console.log(this.list)
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal
      this.cityDetail = this.list.statisGradeCityDetail.slice(0, 5)
    }
  }
})
