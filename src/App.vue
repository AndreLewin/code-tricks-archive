<template>
  <div style="background-color: grey;">
    <select v-model="selectedComponent">
      <option disabled value="">Choose the component to test</option>
      <option>FlexboxWithGutters</option>
    </select>
  </div>

  <template v-if="selectedComponent !== ''">
    <component :is="selectedComponent"></component>
  </template>
</template>

<script lang="ts">
import FlexboxWithGutters from './components/css/FlexboxWithGutters.vue'

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    FlexboxWithGutters
  },
  data() {
    return {
      selectedComponent: ''
    }
  }
})
</script>
