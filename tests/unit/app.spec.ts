import { expect } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import sinon from 'sinon';

describe('App.vue', () => {
    let options: {};
    let showDialog: sinon.SinonSpy;
    beforeEach(() => {
        showDialog = sinon.spy();
        options = {
            methods: {
                showDialog,
            },
        };
    });
    it('should show dialog', () => {
        const wrapper = shallowMount(App, options);
        (wrapper.vm.$refs.first as any).$emit('submit', 10);
        (wrapper.vm.$refs.second as any).$emit('submit', 20);
        expect(showDialog.called).to.eql(true);
    });
    it(`should show success dialog if the employee’s
    minimum pay is equal to or below the employers maximum pay. `, () => {
        const wrapper = shallowMount(App, options);
        (wrapper.vm.$refs.first as any).$emit('submit', 10);
        (wrapper.vm.$refs.second as any).$emit('submit', 20);
        expect(showDialog.called).to.eql(true);
        expect(showDialog.calledWith(true)).to.eql(true);
    });
    it(`should show failure  dialog ff the employee’s
    minimum pay is more than the employers maximum pay. `, () => {
        const wrapper = shallowMount(App, options);
        (wrapper.vm.$refs.first as any).$emit('submit', 20);
        (wrapper.vm.$refs.second as any).$emit('submit', 10);
        expect(showDialog.called).to.eql(true);
        expect(showDialog.calledWith(false)).to.eql(true);
    });
    it(`should show not show any dialog if only one input is entered`, () => {
        const wrapper = shallowMount(App, options);
        (wrapper.vm.$refs.first as any).$emit('submit', 20);
        expect(showDialog.called).to.eql(false);
    });
    it(`should show not hide form when input is submitted`, () => {
        const wrapper = shallowMount(App, options);
        (wrapper.vm.$refs.first as any).$emit('submit', 20);
        expect(wrapper.find('#first').exists()).to.eql(false);
    });
});
