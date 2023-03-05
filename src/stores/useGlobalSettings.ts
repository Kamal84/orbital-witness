import { defineStore } from 'pinia';

interface UseGlobalSettings {
  status: number;
}

export const useGlobalSettings = defineStore('globalSettings', {
  state: (): UseGlobalSettings => ({
    status: 1,
  }),
  actions: {
    setStatus(value: number) {
      this.status = value;
    },
  },
});