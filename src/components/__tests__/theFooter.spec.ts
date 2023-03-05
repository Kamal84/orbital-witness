import { describe, it, expect, beforeEach } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import TheFooter from '@/components/TheFooter.vue';

const footerContent = '© 2023 Orbital Witness Limited. All Rights Reserved. Registered in England and Wales 10732703.';

describe('The Footer', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(TheFooter, {
      props: {
        content: footerContent,
      },
    });
  });
  it('Add Footer text', () => {
    expect(wrapper.props().content).toMatch(footerContent);
  });
  it('Snap shot matches', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
