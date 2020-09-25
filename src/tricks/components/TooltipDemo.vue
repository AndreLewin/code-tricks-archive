<template>
  <div>
    <div style="margin-top: 20px" />
    <Tooltip text="The text of the tooltip">
      <i>A content that opens a tooltip</i>
    </Tooltip>
    <div style="margin-top: 20px" />
    <Tooltip text="The text of the tooltip 2">
      <button>Anything can be set to trigger a tooltip</button>
    </Tooltip>
    <div style="margin-top: 20px" />
    <Tooltip position="right" text="The text of the tooltip 3">
      <button>Sometimes it is better to display on the right</button>
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tooltip from '../../components/Tooltip.vue'

export default defineComponent({
  name: 'TooltipDemo',
  components: {
    Tooltip
  }
})
</script>

<style lang="scss" scoped>
</style>
