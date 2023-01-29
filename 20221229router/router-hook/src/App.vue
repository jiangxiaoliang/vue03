<template>
    <router-view #default="{route, Component}">
      <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <component :is="Component"></component>
      </transition>
    </router-view>
</template>

<script setup lang='ts'>
  import {ref, reactive } from 'vue'
  import 'animate.css'
  // console.log(import.meta.env.BASE_URL)
</script>
<style>
 * {
  padding: 0;
  margin: 0;
 }
 html, body, #app {
  height: 100%;
  overflow: hidden;
 }
</style>