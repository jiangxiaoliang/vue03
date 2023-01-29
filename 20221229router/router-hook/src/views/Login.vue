<template>
  <div style="overflow: scroll; height: 100%;">
    <div class="scroll"></div>
    <div class="login">
      <!-- <LoadingBar></LoadingBar> -->
      <el-card class="box-card">
        <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline">
          <el-form-item prop="user" label="账号">
            <el-input v-model="formInline.user" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="formInline.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'
  import type { FormItemRule, FormInstance } from 'element-plus'
  // import LoadingBar from '@/components/LoadingBar.vue'
  import axios from 'axios'

  type Form = {
    user: string,
    password: string
  }
  type Rules = {
    [k in keyof Form]?: Array<FormItemRule>
  }

  const router = useRouter()
  const form = ref<FormInstance>()

  const formInline = reactive({
    user: '',
    password: '',
  })
  const rules = reactive<Rules>({
    user: [
      {
        required: true,
        message: '请输入账号',
        type: 'string',
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        type: 'string'
      }
    ]
  })

  const onSubmit = () => {
    form.value?.validate((valid) => {
      console.log(valid)
      if (valid) {
        // router.push('/index')
        initRoute()
        localStorage.setItem('token', 'token')
      } else {
        ElMessage.error('请输入信息')
      }
    })
  }

  const initRoute = async () => {
    const res = await axios.get('http://localhost:9999/login', { params: formInline })
    res.data.route.forEach((v: any) => {
      router.addRoute({
        path: v.path,
        name: v.name,
        /* @vite-ignore */
        component: () => import(`../views/${v.component}`)
      })
    })
    router.push('/index')
    console.log(router.getRoutes())
  }
</script>
<style lang="less">
  .login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .scroll {
    width: 100%;
    height: 1000px;
    background: black;
    margin-bottom: 200px;
  }
</style>