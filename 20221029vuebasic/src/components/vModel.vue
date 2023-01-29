<template>
    <div class="model" v-if="modelValue">
        {{modelValue}}
        <div class="close">
            <button @click="close">关闭</button>
        </div>
        <h1>我是子组件</h1>
        <div>
            内容：<input @input="change" :value="textValue" type="text" />
        </div>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    // vue2 value, vue3 modelValue
    const props = defineProps<{
        modelValue: boolean,
        textValue: string,
        textValueModifiers?: {
            isBt: boolean
        }
    }>()

    const emit = defineEmits(['update:modelValue', 'update:textValue'])

    const close = () => {
        emit('update:modelValue', false)
    }
    const change = (e: Event) => {
        const target = e.target as HTMLInputElement
        emit('update:textValue', props.textValueModifiers ? target.value + '变态' : target.value)
    }

</script>
<style scoped>
    .model {
        width: 500px;
        border: 5px solid #ccc;
        position: relative;
    }
    .close {
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>