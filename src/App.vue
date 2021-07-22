<template>
  <Header/>
  <Index/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue';
import Index from '@/views/index.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Index
  }
});
</script>

<style>
</style>
