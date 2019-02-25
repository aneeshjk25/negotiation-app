<template>
  <div id="app">
    <tabs>
      <tab name="Employer" :selected="true">
        <input-salary id="employer" ref="employer" @submit="addSalary($event, 'employerMaximumPay')" v-if="!employerMaximumPay"></input-salary>
      </tab>
      <tab name="Employee">
        <input-salary ref="employee" @submit="addSalary($event, 'employeeMinimumPay')" v-if="!employeeMinimumPay"></input-salary>
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
import { HttpResponse } from 'vue-resource/types/vue_resource';
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
      const isSuccess = this.employeeMinimumPay <= this.employerMaximumPay;
      this.showDialog(isSuccess);
    }
  }
  private showDialog(isSuccess: boolean) {
    this.$modal.show(Dialog, {
      isSuccess,
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
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
