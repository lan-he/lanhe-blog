<template>
  <div class="hello">
    <pre><code class="language-css">
      p { color: red }
      export default {
        name: 'HelloWorld',
        props: {
          msg: String
        }
      }
    </code></pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
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
