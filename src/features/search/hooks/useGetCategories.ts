import { QUERY_KEYS } from "@/common/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/getCategories";
import { ICategoryResponse, VehicleType } from "../utils/types";
import { useMemo } from "react";

function useGetCategories() {
  const {
    data: categoryData,
    error,
    isLoading,
  } = useQuery<ICategoryResponse>({
    queryKey: [QUERY_KEYS.Categories],
    queryFn: getCategories,
  });

  const carCategories = useMemo(
    () =>
      categoryData?.data?.filter((category) =>
        category.vehicle_types.includes(VehicleType.CAR),
      ),
    [categoryData],
  );

  const specCategories = useMemo(
    () =>
      categoryData?.data?.filter((category) =>
        category.vehicle_types.includes(VehicleType.SPEC),
      ),
    [categoryData],
  );

  const motorBikeCategories = useMemo(
    () =>
      categoryData?.data?.filter((category) =>
        category.vehicle_types.includes(VehicleType.MOTO),
      ),
    [categoryData],
  );

  return {
    carCategories,
    specCategories,
    motorBikeCategories,
    error,
    isLoading,
  };
}

export default useGetCategories;
