<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item, index) in person">
                <slot :value="item" :index="index"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    type names = {
        name: string,
        age: number
    }

    const person = reactive<names[]>([
        {
            name: '姓名1',
            age: 18
        },
        {
            name: '姓名2',
            age: 19
        },
        {
            name: '姓名3',
            age: 20
        },
        {
            name: '姓名4',
            age: 21
        }
    ])

</script>
<style scoped lang="less">
    .header {
        height: 200px;
        background-color: red;
        color: #fff;
    }
    .main {
        height: 300px;
        background-color: green;
        color: #fff;
    }
    .footer {
        height: 200px;
        background: blue;
        color: #fff;
    }
</style>