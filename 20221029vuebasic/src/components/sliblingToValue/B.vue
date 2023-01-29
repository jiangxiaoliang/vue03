<template>
    <div class="B">
        {{flag}}
    </div>
</template>

<script setup lang='ts'>
    import Bus from '../../Bus'
    import {ref, reactive } from 'vue'

    // type Props = {
    //     flag: boolean
    // }
    // defineProps<Props>()

    const flag = ref<boolean>(false)
    Bus.on('on-click', (flag1: boolean) =>{
        flag.value = flag1
    })

</script>

<style scoped>
    .B {
        width: 100px;
        height: 100px;
        color: #fff;
        background: red;
    }
</style>