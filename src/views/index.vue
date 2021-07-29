<template>
  <div class="root-box">
    <Todolist class="todolist" />
    <!-- <button @click="opens">123</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { articleCreate } from '@/api/goods'
import Todolist from '@/components/todolist.vue'
export default defineComponent({
  name: 'App',
  components: {
    Todolist
  },
  setup() {
    const opens = () => {
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

<style>
.root-box {
  display: flex;
  justify-content: center;
}
.todolist {
  margin: 0 auto;
  margin-top: 7%;
}
</style>
