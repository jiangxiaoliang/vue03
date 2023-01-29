<template>
    <div>
        <input type="number" step="20" v-model="num.current" />
        <div>
            {{num.tweenedNumber.toFixed(0)}}
        </div>
    </div>
</template>

<script setup lang='ts'>
    import gsap from 'gsap'
    import {ref, reactive, watch } from 'vue'

    const num = reactive({
        current: 0,
        tweenedNumber: 0
    })
    watch(() => num.current, (newVal, oldVal) => {
        console.log(newVal, oldVal)
        gsap.to(num, {
            duration: 1,
            tweenedNumber: newVal
        })
    })
</script>
<style scoped>

</style>