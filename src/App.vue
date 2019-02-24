<template>
  <div id="app">
    <tabs>
      <tab name="first" :selected="true">
        <input-salary @submit="addSalary($event, 'employeeMinimumPay')" v-if="!employeeMinimumPay"></input-salary>
      </tab>
      <tab name="second">
        <input-salary @submit="addSalary($event, 'employerMaximumPay')" v-if="!employerMaximumPay"></input-salary>
      </tab>
    </tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';
import InputSalary from './components/InputSalary.vue';
import Dialog from './components/Dialog.vue';
@Component({
  components: {
    Tabs,
    Tab,
    InputSalary,
  },
})
export default class App extends Vue {
  public employeeMinimumPay = 0;
  public employerMaximumPay = 0;
  public addSalary(
    salary: number,
    salaryFor: 'employeeMinimumPay' | 'employerMaximumPay',
  ) {
    this[salaryFor] = salary;
    this.negotiate();
  }
  private negotiate() {
    if (this.employeeMinimumPay && this.employerMaximumPay) {
      if (this.employeeMinimumPay <= this.employerMaximumPay) {
        this.showDialog(true);
      } else {
        this.showDialog(false);
      }
    }
  }
  private showDialog(success: boolean) {
    this.$modal.show(Dialog, {
      success,
      employeeMinimumPay: this.employeeMinimumPay,
      employerMaximumPay: this.employerMaximumPay,
    });
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
