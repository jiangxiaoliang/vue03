<template>
    <div>
      <h1>路由demo</h1>
      <!-- <router-link to="/">login</router-link>
      <router-link style="margin-left: 20px" to="/reg">reg</router-link> -->

      <!-- <router-link :to="{name:'login'}">login</router-link>
      <router-link style="margin-left: 20px" :to="{name:'reg'}">reg</router-link> -->

      <!-- js方式跳转 -->
      <!-- <button @click="toPage('/')">login</button>
      <button @click="toPage('/reg')">reg</button> -->
      <button @click="toPage('login')">login</button>
      <button @click="toPage('reg')">reg</button>
      <hr />
      <router-view></router-view>
    </div>
</template>

<script setup lang='ts'>
  import {ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const toPage = (url: string) => {
    // 字符串
    // router.push(url)

    // 对象
    // router.push({
    //   path: url
    // })

    // 命名式
    router.push({
      name: url
    })
  }
</script>
<style scoped>

</style>