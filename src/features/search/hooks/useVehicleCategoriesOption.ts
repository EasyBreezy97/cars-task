import { useEffect, useState } from "react";
import { VehicleType, ICategory } from "../utils/types";
import { ISelectOptions } from "@/common/utils/types";

const useVehicleCategoryOptions = (
  vehicleType: VehicleType,
  carCategories: ICategory[] | undefined,
  specCategories: ICategory[] | undefined,
  motorBikeCategories: ICategory[] | undefined,
): ISelectOptions[] => {
  const [options, setOptions] = useState<ISelectOptions[]>([
    { value: "all", label: "ყველა კატეგორია" },
  ]);

  useEffect(() => {
    let vehicleCategory: ICategory[] | undefined = [];
    switch (vehicleType) {
      case VehicleType.CAR:
        vehicleCategory = carCategories;
        break;
      case VehicleType.SPEC:
        vehicleCategory = specCategories;
        break;
      case VehicleType.MOTO:
        vehicleCategory = motorBikeCategories;
        break;
      default:
        vehicleCategory = carCategories;
    }

    if (vehicleCategory) {
      const newOptions = [
        { value: "all", label: "ყველა კატეგორია" },
        ...vehicleCategory.map((category) => ({
          value: String(category.category_id),
          label: category.title,
        })),
      ];
      setOptions(newOptions);
    }
  }, [carCategories, motorBikeCategories, specCategories, vehicleType]);

  return options;
};

export default useVehicleCategoryOptions;
