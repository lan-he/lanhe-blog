<template>
  <div :style="state.style" ref="lavContainer"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import lottie from 'lottie-web';
export default defineComponent({
  name: 'App',
  props: {
      options: {
        type: Object,
        required: true
      },
      height: Number,
      width: Number,
    },
  setup(props,{emit}) {
    const state = reactive({
      style: {
          width: props.width ? `${props.width}px` : '100%',
          height: props.height ? `${props.height}px` : '100%',
          overflow: 'hidden',
          margin: '0 auto'
        }
    })
    const lavContainer = ref()
    onMounted(()=>{
      const anim = lottie.loadAnimation({
          container: lavContainer.value,
          renderer: 'svg',
          loop: props.options.loop !== false,
          autoplay: props.options.autoplay !== false,
          animationData: props.options.animationData,
          rendererSettings: props.options.rendererSettings
        }
      );
      emit('animCreated', anim)
    })
    return {
      state,
      lavContainer
    }
  }
})
</script>
<style scoped>
</style>