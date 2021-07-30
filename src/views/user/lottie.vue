<template>
   <Lottie :options="state.defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
   <button @click="pause"> 暂停 </button>
   <button @click="play"> 开始 </button>
</template>

<script lang="ts">
import Lottie from '@/components/vue-lottie.vue';
import animationWeb from '@/static/lottie/web.ts';
import { defineComponent,reactive, ref } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    Lottie
  },
  setup() {
    const state = reactive({
      defaultOptions: {animationData: animationWeb},
      animationSpeed: 1,
      
    })
    const anims = ref()
    const handleAnimation= (anim:any) =>{
        anims.value = anim;
      }
    const play= () =>{
        anims.value.play()
      }
    const pause= () =>{
        anims.value.pause()
      }
    return {
      state,
      handleAnimation,
      play,
      pause
    }
  },
})
</script>

<style></style>
