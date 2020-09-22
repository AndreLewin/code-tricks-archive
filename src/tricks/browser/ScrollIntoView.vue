<template>
  <div>
    <button @click="scrollToCube5">
      Scroll to cube 5
    </button>
    <button @click="scrollToCube2">
      Scroll to cube 2
    </button>
    <div class="flex-row with-gutters">
      <div class="green-cube">
        1
      </div>
      <div ref="cube-2" class="green-cube">
        2
      </div>
      <div class="green-cube">
        3
      </div>
      <div class="green-cube">
        4
      </div>
      <div id="cube-5" class="green-cube">
        5
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ScrollIntoView',
  methods: {
    scrollToCube5: function () {
      // this works anywore, but JS has to look over the whole DOM
      const element = document?.getElementById("cube-5");
      element?.scrollIntoView(false);
    },
    scrollToCube2: function () {
      // this only works inside this component
      const element = this.$refs["cube-2"] as Element | null;
      element?.scrollIntoView(false);
    }
  }
})
</script>

<style lang="scss" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  height: 120px;

  max-width: 350px;
  overflow-x: scroll;
}

.green-cube {
  height: 100px;
  min-width: 100px;
  background: green;

  outline: 1px solid black;
}
</style>
