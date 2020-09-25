<template>
  <span>
    <span class="tooltiped">
      <slot />
      <span :class="`tooltip-text position-${position}`">{{ text }}</span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      default: 'The text inside the tooltip'
    },
    position: {
      type: String,
      default: 'bottom'
    }
  }
})
</script>

<style lang="scss" scoped>
.tooltiped {
  position: relative;
}

$tooltip-width: 150px;

.tooltip-text {
  position: absolute;

  width: $tooltip-width;
  border-radius: 10px;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
  padding: 5px 5px 5px 5px;
  
  // make sure the tooltip appears over the other elements of the page
  z-index: 1;

  visibility: hidden;
}

// modify an other CSS selector at hover: https://stackoverflow.com/a/10483891
.tooltiped:hover .tooltip-text {
  visibility: visible;
}

.position-bottom {
  // calculate percent minus px:  https://stackoverflow.com/a/13274966
  top: calc(100% + 10px);
  left: calc(50% - #{$tooltip-width}/2);
}

.position-right {
  left: calc(100% + 10px);
  // center vertically (18px is a rough guess of the half of the height, it's not fixed)
  top: calc(50% - 18px)
}
</style>
