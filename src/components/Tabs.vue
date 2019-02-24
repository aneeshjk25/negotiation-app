<template>
  <div>
    <ul class="tabs">
        <li v-for="(tab, index) in tabs" :key="index" :class="{'is-active': tab.isActive}">
            <a @click="selectTab(tab)">
                <span>{{ tab.name }}</span>
            </a>
        </li>
    </ul>
    <div class="tabs-details">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tab from './Tab.vue';

@Component
export default class Tabs extends Vue {
  public tabs: Tab[] = [];
  public selectTab(selectedTab: Tab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    }
  public created() {
    this.tabs = this.$children as Tab[];
  }
}
</script>


<style  scoped>
    ul.tabs {
  width: 100%;
  border-bottom: 2px solid #eaeaea;
  margin-bottom: 24px;
}
ul.tabs li {
  display: inline-block;
  padding: 8px;
  height: 40px;
  box-sizing: border-box;
  list-style: none;
  cursor: pointer;
}
ul.tabs li a {
  display: block;
  height: 100%;
  width: 100%;
  color: #707070;
  font-weight: 600;
  font-size: 14px;
}
ul.tabs li a .tag {
  font-size: 12px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.07);
  color: #707070;
  margin-left: 4px;
  border-radius: 4px;
  display: inline-block;
  margin-right: 0;
  padding: 2px 8px;
}
ul.tabs li.is-active {
  position: relative;
}
ul.tabs li.is-active a {
  color: #000;
}
ul.tabs li.is-active:after {
  content: ' ';
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  background: #a7a7a7;
  z-index: 100;
}

</style>

