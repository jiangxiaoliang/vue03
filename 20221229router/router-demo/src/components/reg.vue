<template>
  <!-- <div class="reg">reg</div> -->
  <button @click="router.back()">返回</button>
  <div>详情</div>
  <!-- <div>名称：{{route.query.name}}</div>
  <div>价格：{{route.query.price}}</div>
  <div>ID：{{route.query.id}}</div> -->

  <div>名称：{{item?.name}}</div>
  <div>价格：{{item?.price}}</div>
  <div>ID：{{item?.id}}</div>
</template>

<script setup lang='ts'>
  import {ref, reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { data } from '../assets/list.json'

  const route = useRoute()
  const router = useRouter()

  const item = data.find(v => v.id == Number(route.params.id))
</script>
<style scoped>
  .reg {
    background: green;
    height: 400px;
    width: 400px;
    font-size: 20px;
    color: white;
  }
</style>