<template>
  <div>
    <div style="background-color: grey;">
      <select v-model="selectedComponent">
        <option disabled value="">
          Choose the component to test
        </option>
        <option>FlexboxWithGutters</option>
        <option>FlexboxWithResponsiveWidth</option>
        <option>ScrollIntoView</option>
      </select>
    </div>

    <template v-if="selectedComponent !== ''">
      <component :is="selectedComponent" />
    </template>
  </div>
</template>

<script lang="ts">
import FlexboxWithGutters from './tricks/css/FlexboxWithGutters.vue'
import FlexboxWithResponsiveWidth from './tricks/css/FlexboxWithResponsiveWidth.vue'
import ScrollIntoView from './tricks/browser/ScrollIntoView.vue'

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    FlexboxWithGutters,
    FlexboxWithResponsiveWidth,
    ScrollIntoView
  },
  data() {
    return {
      selectedComponent: 'FlexboxWithResponsiveWidth'
    }
  }
})
</script>
