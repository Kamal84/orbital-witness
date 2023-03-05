import { defineStore } from 'pinia';
import axios from "axios";
import type { PropertyDetails, GetPropertyDetails } from '@/types';
import { Status } from "@/enums/status";
import { useGlobalSettings } from "@/stores/useGlobalSettings";
import { mappedResponse } from "@/utils/index";

export const propertyDetails = defineStore('propertyDetails', {
  state: (): PropertyDetails => ({
    propertyDetails: [] as GetPropertyDetails[],
  }),
  actions: {
    async getPropertyDetails(
      endpoint: string,
      isAuditEnabled: boolean = false): Promise<GetPropertyDetails[] | undefined> {
      const globalSettings = useGlobalSettings();
      globalSettings.setStatus(Status.LOADING);
      
      try {
        const response = await axios.get(endpoint, {
          params: (isAuditEnabled),
          timeout: 2000,
        });
     
        globalSettings.setStatus(Status.SUCCESS);
        return this.propertyDetails = mappedResponse(response.data);
      } catch (error) {
        globalSettings.setStatus(Status.FAILED);
        throw Error(`Web API failed - ${(error as Error).message}`);
      }
    },
  },
});
