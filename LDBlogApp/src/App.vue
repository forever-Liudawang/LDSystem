<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const parentFunc = ()=>{
  console.log("parent")
}
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" :parentFunc="parentFunc"/>
</template>

<style>
#app {
  
}
</style>
