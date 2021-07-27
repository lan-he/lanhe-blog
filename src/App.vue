<template>
  <Header v-if="false"/>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header
  }
});
</script>

<style>
* {
  margin: 0;
}
</style>
