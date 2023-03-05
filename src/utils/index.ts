import type { GetPropertyDetails } from '@/types';

export const mappedResponse = (obj: GetPropertyDetails[]) => obj.map((el:any): any => 
Object.fromEntries(Object.entries(el).map(([key, value]) => ([ 
  key.replace(/\s+/g, ""),
  value
])))
);