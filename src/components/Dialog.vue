<template>
  <div>
    <p>
      <strong>
      <span v-if="isSuccess">Success</span>
      <span v-else>Failure</span>
    </strong>
    </p>
    <p>Maximum offer was {{employerMaximumPay}}</p>
    <p>Minimum expected salary was {{employeeMinimumPay}}</p>
    <p>Current temperature in London is {{temperature}}</p>
    <p><button @click="$emit('close')">Close</button></p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Tab extends Vue {
  public temperature: string = '';
  @Prop() public isSuccess?: boolean;
  @Prop() public employerMaximumPay?: number;
  @Prop() public employeeMinimumPay?: number;
  public mounted() {
    this.showLondonWeather();
  }
  public showLondonWeather() {
    this.$http
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=London&appid=a81c43d837a5733c0d4c59394b9aaf44',
      )
      .then((response) => {
        const kelvinTemperature = (response.data as Weather).main.temp;
        this.temperature = (kelvinTemperature - 273.15).toFixed(2) + ' C';
      });
  }
}
interface Weather {
    main: {
    temp: number;
  };
}
</script>
<style scoped>
    p{
      text-align: center;
    }
</style>
