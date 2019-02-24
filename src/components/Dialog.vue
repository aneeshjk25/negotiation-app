<template>
  <div>
    <strong>
      <span v-if="success">Success</span>
      <span v-else>Failure</span>
    </strong>
    <p>Maximum offer was {{employerMaximumPay}}</p>
    <p>Minimum expected salary was {{employeeMinimumPay}}</p>
    <button @click="$emit('close')">Close</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Tab extends Vue {
  @Prop() public success?: boolean;
  @Prop() public employerMaximumPay?: number;
  @Prop() public employeeMinimumPay?: number;
}
</script>