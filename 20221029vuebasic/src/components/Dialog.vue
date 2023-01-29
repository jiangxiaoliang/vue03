<template>
    <div class="dialog">
        <header class="header">
            <div>我是弹框</div>
            <span>
                ×
            </span>
        </header>
        <main class="main">
            我是内容123123131321444
        </main>
        <footer class="footer">
            <button>取消</button>
            <button>确定</button>
        </footer>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

</script>
<style lang="less" scoped>
    .dialog {
        width: 400px;
        height: 400px;
        background-color: #141414;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
    }
    .header {
        display: flex;
        color: #CFD3DC;
        padding: 10px;
        border-bottom: 1px solid #636466;
        justify-content: space-between;
    }
    .main {
        flex: 1;
        color: #CFD3DC;
        padding: 10px;
    }
    .footer {
        border-top: 1px solid #636466;
        padding: 10px;
        display: flex;
        justify-content: flex-end;
    }
</style>