import { useEffect, useState } from "react";
import { VehicleType, IManufacturer } from "../utils/types";
import { ISelectOptions } from "@/common/utils/types";

const useManufacturerOptions = (
  vehicleType: VehicleType,
  carManufacturers: IManufacturer[],
  specManufacturers: IManufacturer[],
  motorBikeManufacturers: IManufacturer[],
): ISelectOptions[] => {
  const [options, setOptions] = useState<ISelectOptions[]>([
    { value: "all", label: "ყველა მწარმოებელი" },
  ]);

  useEffect(() => {
    let manufacturers: IManufacturer[] = [];
    switch (vehicleType) {
      case VehicleType.CAR:
        manufacturers = carManufacturers;
        break;
      case VehicleType.SPEC:
        manufacturers = specManufacturers;
        break;
      case VehicleType.MOTO:
        manufacturers = motorBikeManufacturers;
        break;
      default:
        manufacturers = [];
        break;
    }

    const newOptions = [
      { value: "all", label: "ყველა მწარმოებელი" },
      ...manufacturers.map((man) => ({
        value: man.man_id,
        label: man.man_name,
      })),
    ];
    setOptions(newOptions);
  }, [
    carManufacturers,
    motorBikeManufacturers,
    specManufacturers,
    vehicleType,
  ]);

  return options;
};

export default useManufacturerOptions;
