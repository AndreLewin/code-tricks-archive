<template>
  <div>
    <div style="background-color: grey;">
      <select v-model="selectedComponent">
        <option disabled value="">
          Choose the component to test
        </option>
        <option>FlexboxWithGutters</option>
        <option>FlexboxWithResponsiveWidth</option>
        <option>TruncateTextWithEllipsisIfOverflow</option>
        <option>ScrollIntoView</option>
        <option>EmbedPdfPreview</option>
        <option>FeatureFlag</option>
        <option>FetchAndDownload</option>
        <option>TooltipDemo</option>
        <option>TooltipIfTextOverflowDemo</option>
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
import TruncateTextWithEllipsisIfOverflow from './tricks/css/TruncateTextWithEllipsisIfOverflow.vue'
import ScrollIntoView from './tricks/browser/ScrollIntoView.vue'
import EmbedPdfPreview from './tricks/browser/EmbedPdfPreview.vue'
import FeatureFlag from './tricks/browser/FeatureFlag.vue'
import TooltipDemo from './tricks/components/TooltipDemo.vue'
import TooltipIfTextOverflowDemo from './tricks/components/TooltipIfTextOverflowDemo.vue'
import FetchAndDownload from './tricks/browser/FetchAndDownload.vue'

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    FlexboxWithGutters,
    FlexboxWithResponsiveWidth,
    TruncateTextWithEllipsisIfOverflow,
    ScrollIntoView,
    EmbedPdfPreview,
    FeatureFlag,
    TooltipDemo,
    TooltipIfTextOverflowDemo,
    FetchAndDownload
  },
  data() {
    return {
      selectedComponent: 'FeatureFlag'
    }
  }
})
</script>
