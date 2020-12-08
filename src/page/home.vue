<template>
  <div class="hello">
    <Header/>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
