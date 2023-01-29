<template>
    <div>
        <css-demo>
            <div class="a">我是传入的内容</div>
        </css-demo>
        <span>全局选择器</span>

        <div class="div">
            动态css
        </div>

        <!-- <div :class="$style.yellow">
            modlue Css
        </div> -->

        <!-- module 自定义名称 -->
        <div :class="[xl.yellow, xl.border]">
            module css
        </div>
    </div>
</template>

<script setup lang='ts'>
    import cssDemo from './components/cssDemo.vue';
    import {ref, reactive } from 'vue'

    // const dyCss = ref<string>('green')
    const dyCss = ref({
        color: 'green',
        border: '1px solid #ccc'
    })

</script>
<style scoped module="xl">
    :global(span) {
        color: pink;
    }
    /* .div {
        color: v-bind(dyCss)
    } */
    .div {
        color: v-bind('dyCss.color');
        border: v-bind('dyCss.border')
    }

    .yellow {
        color: yellow;
        font-size: 30px;
    }
    .border {
        border: 10px solid blue;
    }
</style>