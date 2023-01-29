<template>
  <div>
    origin:{{test.current}} - {{test.name}}
    <div>
      {{current}} - {{name}}
    </div>
    <div>
      {{test.user}}
    </div>
    <div>
      getter: {{test.newName}}
    </div>
    <div>
      base: {{base.baseCurrent}}
    </div>
    <div>
      change:
      <button @click="change">change</button>
    </div>
    <div>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import { useTestStore, useBase } from './stores'
  import {ref, reactive } from 'vue'
  import { storeToRefs } from 'pinia'

  const test = useTestStore()
  const base = useBase()

  // 从pinia中结构不具备响应式
  const { current, name } = storeToRefs(test)

  // 修改state值的5中方式
  const change = () => {
    // test.current++

    // test.$patch({
    //   current: 2,
    //   name: '小红2'
    // })

    // test.$patch((state) => {
    //   state.current = 3
    // })

    // test.$state = {
    //   current: 3,
    //   name: '小红3'
    // }

    // test.setCurrent(66)

    // test.current++

    test.setUser()
    base.setBaseCurrent()
  }

  const reset = () => {
    test.$reset()
  }

  // test.$subscribe((args, state) => {
  //   console.log(args, state)
  // })

  test.$onAction((args) => {
    args.after(() => {
      console.log('after')
    })
    console.log(args)
  })
    
</script>
<style scoped>

</style>