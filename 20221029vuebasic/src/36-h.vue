<template>
    <div>
        <Btn @on-click="getValue" text="我的按钮">
            <!-- <template #default>1231</template> -->
        </Btn>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive, createVNode, render, h } from 'vue'

    // const divVnode = createVNode('div', {
    //     id: '11'
    // }, '小红')
    // render(divVnode, document.body)

    type Props = {
        text?: string
    }
    const Btn = (props: Props, ctx: any) => {
        return h('div', {
            class: ['rounded', 'bg-green-500', 'text-gray-50', 'text-center', 'p-1.5'],
            onClick: () => {
                ctx.emit('on-click', '点击了我')
            }
        }, ctx.slots.default())
    }
    const getValue = (value: string) => {
        console.log(value)
    }
</script>
<style scoped>

</style>