<template>
    <div>
        {{man}}
        {{liked}}
        <button @click="change">修改</button>
    </div>

    <div>
        {{name}}--{{age}}-{{like}}
        <button @click="changeAttr">修改属性</button>
    </div>
    <div>
        <button @click="changeRaw">raw修改</button>
    </div>
</template>

<script setup lang='ts'>
    import { reactive, toRef, toRefs, toRaw } from 'vue'
    /**
     * toRef 只能用来修改响应式对象的值，非响应式对象视图无变化
     */
    const man = reactive({
        name: '小王',
        age: 20,
        like: 'football'
    })
    const liked = toRef(man, 'like')
    const change = () => {
        liked.value = 'baseketball'
        console.log(man, liked)
    }

    // 自己实现toRefs
    // const toRefs = <T extends object>(object: T) => {
    //     const map: any = {}
    //     for (let key in object) {
    //         map[key] = toRef(object, key)
    //     }
    //     return map
    // }
    const { name, age, like } = toRefs(man)
    const changeAttr = () => {
        name.value = '大王'
    }

    const changeRaw = () => {
        const man1 = toRaw(man)
        console.log(man, man1)
    }
</script>
<style scoped>

</style>