<template>
    <div>
        子组件
        <div>
            {{title}}
        </div>
        <div>
            {{arr}}
        </div>
        <button @click="send">向父组件传值</button>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    // 接受父组件传过来的值 defineProps
    // const props = defineProps({
    //     title: {
    //         type: String,
    //         defualt: ''
    //     }
    // })
    // ts 特有的定义方式
    // const props = defineProps<{
    //     title: string
    // }>()
    // ts 特有的定义默认值
    const props = withDefaults(defineProps<{
        title: string,
        arr: number[]
    }>(), {
        arr: () => [1, 2]
    })
    console.log(props.title)

    // 向父组件传值
    // const emit = defineEmits(['on-click'])
    const emit = defineEmits<{
        (e: 'on-click', name: string): void
    }>()
    const send = () => {
        emit('on-click', '子组件传过来的')
    }

    // 子组件向父组件暴露
    defineExpose({
        name: '子组件暴露的属性',
        open: () => console.log('open')
    })
</script>
<style scoped>

</style>