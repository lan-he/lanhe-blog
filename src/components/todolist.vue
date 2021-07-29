<template>
  <div>
    <input class="s_ipt" @focus="onFocus" />
    <input type="submit" value="百度一下" class="s_btn" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      show: false
    })
    const store = useStore()
    const onFocus = () => {
      state.show = true
      console.log(store.state.todolist.items)
    }
    return {
      state,
      onFocus
    }
  }
})
</script>
<style scoped>
.s_ipt {
  width: 512px;
  height: 16px;
  padding: 12px 16px;
  font-size: 16px;
  margin: 0;
  vertical-align: top;
  outline: 0;
  box-shadow: none;
  border-radius: 10px 0 0 10px;
  border: 2px solid #c4c7ce;
  background: #fff;
  color: #222;
  overflow: hidden;
  box-sizing: content-box;
}
.s_btn {
  cursor: pointer;
  width: 108px;
  height: 44px;
  line-height: 45px;
  line-height: 44px\9;
  padding: 0;
  background: 0 0;
  background-color: #4e6ef2;
  border-radius: 0 10px 10px 0;
  font-size: 17px;
  color: #fff;
  box-shadow: none;
  font-weight: 400;
  border: none;
  outline: 0;
}
</style>