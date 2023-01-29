<template>
  <!-- <div class="login">login</div> -->
  <div>列表页</div>
  <table cellspacing="0" border="1" class="table">
    <thead>
      <tr>
        <th>品牌</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td align="center">{{item.name}}</td>
        <td align="center">{{item.price}}</td>
        <td align="center">
          <button @click="detail(item)">详情</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang='ts'>
  import { data } from '../assets/list.json'
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  type Item = {
    name: string;
    price: string;
    id: number;
  }
  const detail = (item: Item) => {
    // router.push({
    //   path: '/reg',
    //   query: item
    // })

    router.push({
      name: 'reg',
      params: {
        id: item.id
      }
    })
  }

</script>
<style scoped>
  .login {
    background: red;
    height: 400px;
    width: 400px;
    font-size: 20px;
    color: white;
  }
  .table {
    width: 400px;
  }
</style>