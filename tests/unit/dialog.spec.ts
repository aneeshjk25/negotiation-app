import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Dialog from '@/components/Dialog.vue';
import sinon from 'sinon';

describe('Dialog.vue', () => {
  let options: {};
  beforeEach(() => {
    options = {
      propsData: {
        success: true,
        employerMaximumPay: 100,
        employeeMinimumPay: 200,
       },
      methods: {
        showLondonWeather: sinon.stub(),
      },
    };
  });
  it('renders maximum and minimum salary', () => {
    const wrapper = mount(Dialog, options);
    expect(wrapper.html()).to.contain(`<p>Maximum offer was 100</p>`);
    expect(wrapper.html()).to.contain(`<p>Minimum expected salary was 200</p>`);
  });
  it('should show weather for london', () => {
    const wrapper = mount(Dialog, options);
    wrapper.setData({temperature: 10});
    expect(wrapper.html()).to.contain(`<p>Current temperature in London is 10</p>`);
  });
  it('should close the dialog', () => {
    const wrapper = mount(Dialog, options);
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().close).to.deep.equal([[]]);
  });
  it('should close show success when input is success', () => {
    const wrapper = mount(Dialog, options);
    expect(wrapper.html()).to.contain(`<span>Success</span>`);
    expect(wrapper.html()).to.not.contain(`<span>Failure</span>`);
  });
  it('should close show failure when input is failure', () => {
    const wrapper = mount(Dialog, options);
    wrapper.setData({success: false});
    expect(wrapper.html()).to.contain(`<span>Failure</span>`);
    expect(wrapper.html()).to.not.contain(`<span>Success</span>`);
  });
});
