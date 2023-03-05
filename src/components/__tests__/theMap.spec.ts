import { describe, it, expect, beforeEach } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import TheMap from '@/components/TheMap.vue';

const coordinatesX = 123;
const coordinatesY = 344;
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

describe('The Map', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(TheMap, {
      props: {
        mapX: coordinatesX,
        mapY: coordinatesY
      },
    });
  });
  it('Pass in google coordinates', () => {
    expect(wrapper.props().mapX).toBe(coordinatesX);
    expect(wrapper.props().mapY).toBe(coordinatesY);
  });
  it('Returns the Google API key', () => {
    expect(wrapper.vm.googleApiKey).toBe(apiKey);
  });
  it('Snap shot matches', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
