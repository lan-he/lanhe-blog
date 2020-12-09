<template>
  <div class="hello">
    <Header/>
    <p class="cenber">原凯父亲的空间</p>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'HelloWorld',
  components: {
    Header
  }
}
</script>
<style scoped>
.cenber {
  color: #f1f1f1;
}
</style>
