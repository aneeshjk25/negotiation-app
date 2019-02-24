<template>
    <div>
        <input v-model.number="salary" type="number"/>
        <button type="button" @click="onSubmit">Submit</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Tab extends Vue {
    private salary = 0;
    private onSubmit() {
        this.$emit('submit', this.salary);
    }
}
</script>