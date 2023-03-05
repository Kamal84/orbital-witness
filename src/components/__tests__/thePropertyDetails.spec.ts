import { describe, it, expect, beforeEach } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import ThePropertyDetails from '@/components/ThePropertyDetails.vue';

const query = { 
  TitleNumber: 'AGL250417',
  Tenure: 'Leasehold',
  X: Number(0.105581315),
  Y: Number(51.52042461)
};

describe('The property details', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(ThePropertyDetails);
  });
  it('return reactive data', async () => {
    expect(query).toHaveProperty('TitleNumber');
    expect(query).toHaveProperty('Tenure');
    expect(query).toHaveProperty('X');
    expect(query).toHaveProperty('Y');
  });
  it('Snap shot matches', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
