<template>
  <div>
    <span>Change the width of your screen to see what happens when the text should overflow.</span>
    <div class="truncate-text outline" style="margin-top: 20px">
      The parent has those CCS properties: <b>white-space: nowrap; overflow: hidden; text-overflow: ellipsis;</b>
      The ellipsis (...) will appear only if the text wants to overflow.
    </div>
    <div class="truncate-text outline small-width">
      <i>white-space: nowrap;</i> is to avoid the wrapping of the text into a new line.
    </div>
    <div class="truncate-text outline small-width">
      This small text does not need to overflow.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TruncateTextWithEllipsisIfOverflow',
})
</script>

<style lang="scss" scoped>
// inspired by Vuetify 1's text-truncate helper class
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.outline {
  outline: 1px solid black;
}

.small-width {
  width: 400px;
}
</style>
