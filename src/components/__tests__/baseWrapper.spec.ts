import { describe, it, expect, beforeEach } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import BaseWrapper from '@/components/BaseWrapper.vue';

describe('Base wrapper', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(BaseWrapper, {
      props: {
        largeWrapper: false,
      },
    });
  });
  it('Default container width', () => {
    expect(wrapper.props().largeWrapper).not.toBe(true);
    expect(wrapper.classes('.lg:w-6/12')).toBeDefined();
  });
  it('Increase desktop container width', async () => {
    await wrapper.setProps({largeWrapper: true});
    expect(wrapper.props().largeWrapper).toBe(true);
  });
  it('Snap shot matches', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
