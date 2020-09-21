<template>
  <div>
    <span>
      Fit the elements in the flex row, but always use all the width available. If there is not enough space for one element (because of min-width or width), wrap on a new line.
    </span>
    <div class="flex-row-wrap">
      <div class="thin-green rectangle flex-grow">
        width: 200px;
        flex-grow: 1;
      </div>
      <div class="large-blue rectangle flex-grow">
        width: 400px;
        flex-grow: 1;
      </div>
      <div class="thin-green rectangle flex-grow">
        width: 200px;
        flex-grow: 1;
      </div>
      <div class="thin-green rectangle flex-grow">
        width: 200px;
        flex-grow: 1;
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FlexboxWithResponsiveWidth'
})
</script>

<style lang="scss" scoped>
.flex-row-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.thin-green {
  width: 200px;
  background: green;
}

.large-blue {
  width: 400px;
  background: blue;
}

.rectangle {
  height: 100px;
  border: 1px solid black;
  margin: -1px -1px -1px -1px;
}

.flex-grow {
  flex-grow: 1;
}
</style>
