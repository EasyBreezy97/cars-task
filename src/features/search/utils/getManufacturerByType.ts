import { IManufacturer, VehicleType } from "../utils/types";

const getManufacturersByType = (
  vehicleType: VehicleType,
  carManufacturers: IManufacturer[],
  specManufacturers: IManufacturer[],
  motorBikeManufacturers: IManufacturer[],
): IManufacturer[] => {
  switch (vehicleType) {
    case VehicleType.CAR:
      return carManufacturers;
    case VehicleType.SPEC:
      return specManufacturers;
    case VehicleType.MOTO:
      return motorBikeManufacturers;
    default:
      return [];
  }
};

export default getManufacturersByType;
