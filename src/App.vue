<template>
  <div id="app">
    <tabs>
      <tab name="first" :selected="true">first</tab>
      <tab name="second">second</tab>
    </tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';
@Component({
  components: {
    Tabs,
    Tab,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
