<template>
  <div>
    In the browser's console, type <b>window.flagName = true</b> to activate a flag.
    <br />
    This is not reactive, so you have to load this component again so the function isFlagEnabled is executed again
    <br />
    <br />
    The flag <i>potato</i> is <b>{{ isFlagEnabled("potato") ? "activated" : "not activated"}}</b>
    <br />
    The flag <i>tomato</i> is <b>{{ isFlagEnabled("tomato") ? "activated" : "not activated"}}</b>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FeatureFlag',
  methods: {
    isFlagEnabled: isFlagEnabled
  }
})

function isFlagEnabled(flagName: string): boolean {
  return (window as { [key: string]: any })?.[flagName] ?? false;
}
</script>

<style lang="scss" scoped>
</style>
