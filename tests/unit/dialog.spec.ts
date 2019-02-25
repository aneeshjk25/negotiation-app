import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Dialog from '@/components/Dialog.vue';
import sinon from 'sinon';

describe('Dialog.vue', () => {
  let options: {};
  beforeEach(() => {
    options = {
      propsData: {
        isSuccess: true,
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
    expect(wrapper.html()).to.contain(`Maximum offer was 100`);
    expect(wrapper.html()).to.contain(`Minimum expected salary was 200`);
  });
  it('should show weather for london', () => {
    const wrapper = mount(Dialog, options);
    wrapper.setData({temperature: 10});
    expect(wrapper.html()).to.contain(`Current temperature in London is 10`);
  });
  it('should close the dialog', () => {
    const wrapper = mount(Dialog, options);
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().close).to.deep.equal([[]]);
  });
  it('should show success when input is success', () => {
    const wrapper = mount(Dialog, options);
    expect(wrapper.html()).to.contain(`Success`);
    expect(wrapper.html()).to.not.contain(`Failure`);
  });
  it('should show failure when input is failure', () => {
    const wrapper = mount(Dialog, options);
    wrapper.setData({isSuccess: false});
    expect(wrapper.html()).to.contain(`Failure`);
    expect(wrapper.html()).to.not.contain(`Success`);
  });
});
