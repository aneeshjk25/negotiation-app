<template>
  <div v-show="isActive">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Tab extends Vue {
    @Prop() public name?: string;
    @Prop() public selected = false;
    public isActive = false;
    public mounted() {
        this.isActive = this.selected;
    }
}
</script>