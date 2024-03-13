export enum VehicleType {
  CAR = 0,
  SPEC = 1,
  MOTO = 2,
}

export interface ISearchCardInputs {
  agreementType: string;
  manufacturer: string;
  model: string;
  category: string;
  priceFrom: string;
  priceTo: string;
}



export interface IManufacturer {
  man_id: string;
  man_name: string;
  is_car: string;
  is_spec: string;
  is_moto: string;
}
