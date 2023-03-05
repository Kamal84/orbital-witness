export interface PropertyDetails {
  propertyDetails: GetPropertyDetails[];
}

export interface GetPropertyDetails {
  TitleNumber: string;
  Tenure: string;
  X: number;
  Y: number;
  PropertyAddress?: string;
}

export interface TableFields {
  key: string;
  label: string;
  sort: boolean;
}

export interface Pagination {
  currPage: number;
  showRows: number;
  totalPages: number;
}