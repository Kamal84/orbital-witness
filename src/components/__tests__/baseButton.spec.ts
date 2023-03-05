import { describe, it, expect, beforeEach } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton.vue';

describe('Base button', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(BaseButton, {
      props: {
        isDisabled: false,
        text: 'Next page',
        chevron: 'right'
      },
    });
  });
  it('Populates button text - Next page', () => {
    expect(wrapper.props().text).toBe('Next page');
  });
  it('Render chevron left of button', async () => {
    await wrapper.setProps({chevron: 'left',});
    expect(wrapper.props().chevron).toContain('left');
  });
  it('Button disabled', async () => {
    const button = wrapper.find(".btn");
    await wrapper.setProps({isDisabled: true});
    expect(button.attributes('disabled')).toBeDefined();
  });
  it('Snap shot matches', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
