<template>
  <div>
    <Header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/header.vue';

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    Header
  }
});
</script>

<style>
</style>
