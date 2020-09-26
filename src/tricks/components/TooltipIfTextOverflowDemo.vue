<template>
  <div>
    <div class="spacer" />
    <div class="outline">
      <TooltipIfTextOverflow text="This text will have an ellipsis and a tooltip at hover if the container is not large enough. Try reducing screen width." /></tooltipiftextoverflow>
    </div>
    <div class="spacer" />
    <div class="outline limited-width">
      <TooltipIfTextOverflow text="This text will have an ellipsis and a tooltip at hover if the container is not large enough. Try reducing screen width." /></tooltipiftextoverflow>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TooltipIfTextOverflow from '../../components/TooltipIfTextOverflow.vue'

export default defineComponent({
  name: 'TooltipIfTextOverflowDemo',
  components: {
    TooltipIfTextOverflow
  }
})
</script>

<style lang="scss" scoped>
.outline {
  outline: 1px solid black;
}
.limited-width {
  max-width: 400px;
}
.spacer {
  margin-top: 20px;
}
</style>
