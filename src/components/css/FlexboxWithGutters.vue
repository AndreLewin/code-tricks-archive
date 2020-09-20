<template>
  <div>
    <span>Gutters are the space between the elements of the row. They are always the same width, but are not present outside of the flexbox. The trick is to apply a negative margin on the flexbox.</span>
    <div class="flex-row-wrap with-gutters">
      <div class="green-rectangle" />
      <div class="green-rectangle" />
      <div class="green-rectangle" />
      <div class="green-rectangle" />
      <div class="green-rectangle" />
      <div class="green-rectangle" />
      <div class="green-rectangle" />
      <div class="green-rectangle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FlexboxWithGutters'
})
</script>

<style lang="scss" scoped>
.flex-row-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

$vertical-gutter-half-width: 20px;
$horizontal-gutter-half-width: 10px;
.with-gutters {
  margin-left: -$vertical-gutter-half-width;
  margin-right: -$vertical-gutter-half-width;
  margin-top: -$horizontal-gutter-half-width;
  margin-bottom: -$horizontal-gutter-half-width;

  & > * {
    margin-left: $vertical-gutter-half-width;
    margin-right: $vertical-gutter-half-width;
    margin-top: $horizontal-gutter-half-width;
    margin-bottom: $horizontal-gutter-half-width;
  }
}

.green-rectangle {
  height: 100px;
  width: 400px;
  background: green;
}
</style>
