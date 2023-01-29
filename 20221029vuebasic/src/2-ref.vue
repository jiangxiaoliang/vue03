<template>
    <div>
        {{man}}
        <button @click="change">修改</button>
    </div>
    <div>
        {{man2}}
        <button @click="change2">修改</button>
    </div>
    <div>
        {{man3}}
        <button @click="change3">修改</button>
    </div>
    <div ref="dom">我是dom</div>
    <button @click="change4">获取</button>
</template>

<script setup lang='ts'>
    import {ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
    // ref 深层次比较，shallowRef 浅层次比较
    // ref 和 shallowRef 不能一起使用，不然会影响shallowRef更新视图，底层是通过triggerRef来实现

    type M = {
        name: string
    }
    const man = ref<M>({
        name: '小亮'
    })
    const change = () => {
        man.value.name = '大亮'
        console.log(man)
        console.log(isRef(man)) // 判断一个数据是否是ref对象
    }

    const man2 = shallowRef({ name: '小亮2' })
    const change2 = () => {
        // man2.value.name = '大亮2' // 不会响应
        // man2.value = { name: '大亮2' } // 响应

        // man.value.name = '改变了'
        // man2.value.name = '我被ref影响了也更新了'

        man2.value.name = 'triggerRef影响了'
        triggerRef(man2)
        console.log(man2)
    }


    function MyRef<T>(value: T) {
        let timer: any
        return customRef((track, trigger) => {
            return {
                get() {
                    track()
                    return value
                },
                set(newValue) {
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        console.log('触发了')
                        value = newValue
                        trigger()
                    }, 500)
                    
                }
            }
        })
    }
    const man3 = MyRef<string>('小亮3')
    const change3 = () => {
        man3.value = '大亮3'
    }

    const dom = ref<HTMLElement>()
    const change4 = () => {
        console.log(dom.value?.innerText)
    }
</script>
<style scoped>

</style>