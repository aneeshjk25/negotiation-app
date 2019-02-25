import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import InputSalary from '@/components/InputSalary.vue';

describe('InputSalary.vue', () => {
  it('should output with salary on click of submit', () => {
    const wrapper = mount(InputSalary);
    wrapper.find('input').setValue(100);
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().submit[0][0]).to.equal(100);
  });
});
