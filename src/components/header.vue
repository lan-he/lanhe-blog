<template>
  <div class="banner" ref="banner">
    <div class="layer">
      <img
        ref="back"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="back"
        src="http://qnimg.zowoyoo.com/img/null/1607501492084.png"
      />
    </div>
    <div class="layer">
      <img
        v-if="persont22 === 3"
        ref="person22"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="person22"
        src="http://qnimg.zowoyoo.com/img/null/1607501542003.png"
      />
      <img
        v-else-if="persont22 === 2"
        ref="person22"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="person22"
        src="http://qnimg.zowoyoo.com/img/null/1607501562527.png"
      />
      <img
        v-else
        ref="person22"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="person22"
        src="http://qnimg.zowoyoo.com/img/null/1607503700517.png"
      />
    </div>
    <div class="layer">
      <img
        ref="hill"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="hill"
        src="http://qnimg.zowoyoo.com/img/null/1607501848095.png"
      />
    </div>
    <div class="layer">
      <img
        ref="leaves"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="leaves"
        src="http://qnimg.zowoyoo.com/img/null/1607501868946.png"
      />
    </div>
    <div class="layer">
      <img
        ref="person33"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="person33"
        src="http://qnimg.zowoyoo.com/img/null/1607501903187.png"
      />
    </div>
    <div class="layer">
      <img
        ref="left"
        :class="transition ? 'transitiontrue' : 'transitionfalse'"
        class="left"
        src="http://qnimg.zowoyoo.com/img/null/1607501927925.png"
      />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, ref, toRefs } from 'vue'
export default {
  setup() {
    const banner = ref(null)
    const back = ref(null)
    const person22 = ref(null)
    const person33 = ref(null)
    const hill = ref(null)
    const leaves = ref(null)
    const left = ref(null)
    const state = reactive({
      initsX: '',
      transition: false,
      persont22: 3,
    })
    onMounted(() => {
      console.log(banner)
      banner.value.addEventListener('mousemove', onMousemove)
      banner.value.addEventListener('mouseenter', onMouseover)
      banner.value.addEventListener('mouseleave', onMouseleave)
      toAnimation()
    })
    const toAnimation = () => {
      setInterval(() => {
        setTimeout(() => {
          state.persont22 = 2
        }, 0)
        setTimeout(() => {
          state.persont22 = 0
        }, 100)
        setTimeout(() => {
          state.persont22 = 2
        }, 400)
        setTimeout(() => {
          state.persont22 = 3
        }, 500)
      }, 5000)
    }
    const onMouseover = (e) => {
      state.initsX = e.pageX
      state.transition = false
    }
    const onMouseleave = (e) => {
      state.transition = true
      back.value.style.filter = 'blur(4px)'
      back.value.style.transform = 'translate(0px, 0px)'
      person22.value.style.filter = 'blur(0)'
      person22.value.style.transform = 'translate(0px, 0px)'
      hill.value.style.filter = 'blur(1px)'
      hill.value.style.transform = 'translate(-58px, 0px)'
      leaves.value.style.filter = 'blur(4px)'
      leaves.value.style.transform = 'translate(0px, 5px)'
      person33.value.style.filter = 'blur(5px)'
      person33.value.style.transform = 'translate(0px, -2px)'
      left.value.style.filter = 'blur(6px)'
      left.value.style.transform = 'translate(0px, 0px)'
    }
    const onMousemove = (e) => {
      const difference = e.pageX - state.initsX
      back.value.style.filter =
        'blur(' + Math.abs(4 + (e.pageX - state.initsX) / 450) + 'px)'

      person22.value.style.filter =
        'blur(' + Math.abs((e.pageX - state.initsX) / 222) + 'px)'
      person22.value.style.transform =
        'translate(' + (e.pageX - state.initsX) / 192 + 'px, 0px)'

      if (difference < 0) {
        hill.value.style.filter =
          'blur(' + Math.abs(1 + (e.pageX - state.initsX) / 300) + 'px)'
      } else if (difference >= 0 && difference < 100) {
        hill.value.style.filter =
          'blur(' + Math.abs(1 - (e.pageX - state.initsX) / 100) + 'px)'
      } else {
        hill.value.style.filter =
          'blur(' + Math.abs(1 + (e.pageX - state.initsX) / 606) + 'px)'
      }
      hill.value.style.transform =
        'translate(' + (-58 + (e.pageX - state.initsX) / 80) + 'px, 0px)'

      if (difference < 0) {
        leaves.value.style.filter =
          'blur(' + Math.abs(4 + (e.pageX - state.initsX) / 240) + 'px)'
      } else if (difference >= 0 && difference < 500) {
        leaves.value.style.filter =
          'blur(' + Math.abs(4 - (e.pageX - state.initsX) / 125) + 'px)'
      } else {
        leaves.value.style.filter =
          'blur(' + Math.abs((e.pageX - state.initsX) / 384) + 'px)'
      }
      leaves.value.style.transform =
        'translate(' + (e.pageX - state.initsX) / 47 + 'px, 5px)'

      if (difference < 0) {
        person33.value.style.filter =
          'blur(' + Math.abs(5 + -difference / 240) + 'px)'
      } else if (difference >= 0 && difference < 1000) {
        person33.value.style.filter =
          'blur(' + Math.abs(5 - (e.pageX - state.initsX) / 200) + 'px)'
      } else if (difference >= 1000 && difference < 1780) {
        person33.value.style.filter = 'blur(' + Math.abs(0) + 'px)'
      } else {
        person33.value.style.filter =
          'blur(' + Math.abs((e.pageX - state.initsX - 1780) / 28) + 'px)'
      }
      person33.value.style.transform =
        'translate(' + difference / 21.3 + 'px, -2px)'

      left.value.style.filter =
        'blur(' + Math.abs(6 - (e.pageX - state.initsX) / 320) + 'px)'
      left.value.style.transform = 'translate(' + difference / 18 + 'px, 0px)'
    }
    return {
      ...toRefs(state),
      banner,
      back,
      person22,
      person33,
      hill,
      leaves,
      left,
      toAnimation,
      onMouseover,
      onMouseleave,
      onMousemove,
    }
  },
}
</script>
<style scoped>
.banner {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.375vw;
  min-width: 999px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  overflow: hidden;
  transition: 1s;
}
.layer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.back {
  width: 3483px;
  height: 290px;
  filter: blur(4px);
  transform: translate(0px, 0px);
}
.person22 {
  width: 2090px;
  height: 191px;
  filter: blur(0);
  transform: translate(0px, 0px);
}
.hill {
  width: 3483px;
  height: 290px;
  filter: blur(1px);
  transform: translate(-58px, 0px);
}
.leaves {
  width: 2090px;
  height: 174px;
  filter: blur(4px);
  transform: translate(0px, 5px);
}
.person33 {
  width: 2090px;
  height: 191px;
  filter: blur(5px);
  transform: translate(0px, -2px);
}
.left {
  width: 2264px;
  height: 207px;
  filter: blur(6px);
  transform: translate(0px, 0px);
}
.transitiontrue {
  transition: 0.3s;
}
.transitionfalse {
  transition: 0s;
}
</style>
