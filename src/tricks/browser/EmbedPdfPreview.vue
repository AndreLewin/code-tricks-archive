<template>
  <div>
    <button @click="openPdfPreviewFromFile">
      Open PDF preview from file (see code if you have to fetch the pdf, or have an arraybuffer or a blob)
    </button>
    <div ref="futureEmbedParent">The inner html will be replaced</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'EmbedPdfPreview',
  methods: {
    openPdfPreviewFromFile: function () {
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
      const embedElement: string = `<embed type="application/pdf" src="/example.pdf" width="100%" height="600">`;
      const futureEmbedParent = this.$refs.futureEmbedParent as Element;
      futureEmbedParent.innerHTML = embedElement;

      // if instead you have to fetch an arraybuffer, or have an arraybuffer, or have a blob:
      // const arraybuffer = await this.$axios.$get("url", { responseType: "arraybuffer "});
      // const blob = new Blob([arraybuffer], { type: "application/pdf" });
      // const href = window.URL.createObjectURL(blob);
      // const embedElement: string = `<embed type="application/pdf" src="${href}" width="100%" height="600">`
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
