<template>
    <div>
        <div>{{$env}}</div>
        <div>{{$filter.format('的火车')}}</div>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive, getCurrentInstance } from 'vue'

    const app = getCurrentInstance()
    console.log(app?.proxy?.$env)
    console.log(app?.proxy?.$filter.format('XX'))
</script>
<style scoped>

</style>