<template>
    <div>
        <img id="img" width="300" height="300" src="./assets/timg.jpg" />
    </div>
</template>

<script setup lang='ts'>
    import useBase64 from './hook/index'
    import {ref, reactive } from 'vue'

    useBase64({ el: '#img'}).then(res => {
        console.log(res.baseUrl)
    })
</script>
<style scoped>

</style>