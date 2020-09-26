<template>
  <span @mouseover="checkIfTextOverflow">
    <Tooltip :text="text" :disabled="!doesTextOverflow" :fitToParentWidth="true">
      <div class="truncate-text" ref="container">
        {{ text }}
      </div>
    </Tooltip>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tooltip from './Tooltip.vue';
import { isDefined } from '../tools/type-guards';

export default defineComponent({
  name: 'TooltipIfTextOverflow',
  components: {
    Tooltip
  },
  props: {
    text: {
      type: String,
      default: 'The text that will appear in the tooltip if there is not enough space'
    }
  },
  data() {
    return {
      doesTextOverflow: false
    }
  },
  methods: {
    // this.$refs.container does not seem reactive, so we can't use a computed for isTextOverflowed
    // instead, we use the hover event to compute it at a defined moment
    checkIfTextOverflow: function () {
      // https://stackoverflow.com/a/10017343
      const container = this.$refs.container as HTMLElement | undefined;
      const offsetWidth = container?.offsetWidth;
      const scrollWidth = container?.scrollWidth;
      if (!isDefined(offsetWidth) || !isDefined(scrollWidth)) {
        return (this.doesTextOverflow = false);
      }

      return (this.doesTextOverflow = offsetWidth < scrollWidth);
    }
  }
})
</script>

<style lang="scss" scoped>
// inspired by Vuetify 1's text-truncate helper class
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
