<template>
  <button @click="opens">123</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getListAPI, articleCreate } from '@/api/goods'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const opens = () => {
      const as = {
        username: 'heminxguan',
        password: '123456'
      }
      getListAPI(as).then(res => {
        console.log(res)
      })
      const parameter = {
        articleTitle: 'heminxguan',
        articleContent: 'sssssssssss'
      }
      articleCreate(parameter).then(res => {
        console.log(res)
      })
    }
    return {
      opens
    }
  }
})
</script>

<style></style>
