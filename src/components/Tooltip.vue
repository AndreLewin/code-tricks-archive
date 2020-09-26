<template>
  <div class="tooltiped" :class="`${ fitToParentWidth ? 'fit-to-parent-width' : 'fit-to-child-width'}`">
    <span :class="`tooltip-text position-${position} ${disabled ? 'disabled' : ''}`">{{ text }}</span>
    <slot />
  </div>
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // position the tooltip using to the largest child element of tooltiped
    // or position the tooltip using the width of the element that uses the tooltip (ex for TooltipIfTextOverflow)
    fitToParentWidth: {
      type: Boolean,
      defaulte: false
    }
  }
})
</script>

<style lang="scss" scoped>
.tooltiped {
  position: relative;
}

.fit-to-parent-width {
  width: 100%;
}

.fit-to-child-width {
  // https://stackoverflow.com/questions/450903/how-can-i-make-a-div-not-larger-than-its-contents
  // make sure the div takes the width of the largest in the children element
  display: inline-block;
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
  // calculate percent minus px: https://stackoverflow.com/a/13274966
  top: calc(100% + 10px);
  left: calc(50% - #{$tooltip-width}/2);
}

.position-right {
  left: calc(100% + 10px);
  // center vertically (18px is a rough guess of the half of the height, it's not fixed)
  top: calc(50% - 18px)
}

.disabled {
  visibility: hidden !important;
}
</style>
