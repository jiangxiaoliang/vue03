<template>
    <div class="wraps">
        <header class="header">
            <div>left</div>
            <div>中间</div>
            <div>right</div>
        </header>
        <main class="main">
            <div class="main-items" v-for="item in 100">
                <div class="main-port">头像</div>
                <div class="main-desc">
                    <div>小红</div>
                    <div>小红快回家</div>
                </div>
            </div>
        </main>
        <footer class="footer">
            <div class="footer-items" v-for="item in footer">
                <div>{{item.icon}}</div>
                <div>{{item.text}}</div>
            </div>
        </footer>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    type Footer<T> = {
        icon: T,
        text: T
    }

    const footer = reactive<Footer<string>[]>([
        {
            icon: '1',
            text: '首页'
        },
        {
            icon: '2',
            text: '首页2'
        },
        {
            icon: '3',
            text: '首页3'
        },
        {
            icon: '4',
            text: '首页4'
        }
    ])

</script>
<style lang="less">
    html,
    body,
    #app {
        height: 100%;
        overflow: hidden;
        font-size: 14px;
    }
    .wraps {
        height: inherit;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .header {
        background-color: pink;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30px;
    }
    .main {
        flex: 1;
        overflow: auto;
        &-items {
            display: flex;
            border: 1px solid #ccc;
            box-sizing: border-box;
            padding: 5px;
        }
        &-port {
            background: black;
            width: 30px;
            height: 30px;
            border-radius: 200px;
        }
        &-desc {
            margin-left: 10px;
            div:last-child  {
                font-size: 10px;
                color: #333;
                margin-top: 5px;
            }
        }
    }
    .footer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        border: 1px solid #ccc;
        &-items {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px;
        }
    }
</style>