<template>
    <div>
        case1: <input v-model="message" type="text" />
        <hr />
        case2: <input v-model="message1" type="text" />
        <hr />
        case3: <input v-model="obj.foo.bar.name" type="text" />
        case4: <input v-model="obj.foo.bar.age" type="text" />
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive, watch } from 'vue'

    const message = ref<string>('小亮')
    const message1 = ref<string>('大亮')
    // watch(message, (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    // })
    
    // watch两个数据
    // watch([message, message1], (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    // })

    // watch对象
    // const obj = ref({
    //     foo: {
    //         bar: {
    //             name: 'jxl',
    //             age: 18
    //         }
    //     }
    // })
    const obj = reactive({
        foo: {
            bar: {
                name: 'jxl',
                age: 18
            }
        }
    })
    // watch(obj, (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    // }, {
    //     // deep: true // ref需要深度监听,reactive不需要
    //     immediate: true, // 立即执行
    //     flush: 'pre' // pre组件更新之前调用 async同步执行 post组件更新之后
    // })
    
    // 监听对象的某一个属性
    watch(() => obj.foo.bar.name, (newValue, oldValue) => {
        console.log(newValue, oldValue)
    })
</script>
<style scoped>

</style>