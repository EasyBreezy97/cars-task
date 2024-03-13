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

interface DebugReport {
  time: {
    total: string;
    queries: string;
  };
  memory: {
    start_usage: string;
    end_usage: string;
    peak_usage: string;
  };
}

export interface IManufacturerModelData {
  model_id: number;
  man_id: number;
  model_name: string;
  model_group: string;
  sort_order: number;
  cat_man_id: number;
  cat_model_id: number;
  cat_modif_id: number;
  is_car: boolean;
  is_moto: boolean;
  is_spec: boolean;
  show_in_salons: number;
  shown_in_slider: number;
}

interface IVersioning {
  app_data_version: string;
  langs_version: string;
  app_store_version: string;
  play_store_version: string;
  endPoints: {
    appDataGenerator: string;
    langGenerator: string;
  };
  application: string;
  androidVersion: string;
  iosVersion: string;
}

export interface IManufacturerModelsResponse {
  debug_report: DebugReport;
  data: IManufacturerModelData[];
  versioning: IVersioning;
}
