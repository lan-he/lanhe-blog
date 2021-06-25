<template>
  <div class="index-box">
    <Header/>
    <img src="https://i.imgur.com/xlm823p.jpg" alt="">
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Home',
  components: {
    Header
  },
  mounted() {
    let str = 'A||B||Y&&U'
    console.log(this.regulars(str))
  },
  methods:{
    regulars(str) {
      var patt = /^[A-Z]{1}([&&]|[||]){2}/;
      var patt1 = /^[A-Z]{1}$/;
      var three = 3;
      for (var i = 0, l = str.length; i < l/three; i++) {
        let a = str.slice(three*i, three*(i+1));
        if (a.length >= 3) {
          if(!patt.test(a)) {
            return false
          }
        } else {
          if(!patt1.test(a)) {
            return false
          }
        }
      }
      const tests = str.charAt(str.length-1)
      if(!patt1.test(tests)) {
        return false
      }
      return true
    }
  }
}
</script>
<style scoped>
</style>
