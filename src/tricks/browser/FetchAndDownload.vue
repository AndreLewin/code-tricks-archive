<template>
  <div>
    <button @click="fetchAndDownload">
      Click to download a file
    </button>
    <!-- The fastest way would be to put an <a href="path" download="name-of-file">, but we are not doing that here in order to explore the data types -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FetchAndDownload',
  methods: {
    fetchAndDownload: async function () {
      // https://javascript.info/fetch

      // 1) faster way
      const response1 = await fetch('/example.pdf');
      console.log("response1", response1)
      console.log("response1.headers.get('content-type')", response1.headers.get('content-type'))
      // response.blob() seem to deduce the mime-type of the file properly
      const blob1 = await response1.blob();
      console.log("blob1", blob1)

      // 2) slower way
      const response2 = await fetch('/example.pdf');
      console.log("response2", response2)
      const contentType = response2.headers.get('content-type');
      console.log("response2.headers.get('content-type')", contentType)
      const arrayBuffer2 = await response2.arrayBuffer();
      console.log("arrayBuffer2", arrayBuffer2)
      const arrayBufferView2 = new Uint8Array(arrayBuffer2);
      console.log("arrayBufferView2", arrayBufferView2);
      // a blob is data with a type, the type is not compulsory but you might want to provide it that way:
      // const blob = new Blob([arraybuffer], { type: "application/pdf" });
      // const blob = new Blob([arraybuffer], { type: contentType });   
      const blob2 = new Blob([arrayBufferView2]);
      console.log("blob2", blob2)

      // https://javascript.info/blob#image-to-blob
      const link = document.createElement('a');
      link.download = 'custom-file-name.pdf';

      link.href = URL.createObjectURL(blob2);
      link.click();
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
