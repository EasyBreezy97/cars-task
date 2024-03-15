import { useMemo } from "react";
import { QUERY_KEYS } from "@/common/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getManufacturers } from "../api/getManufacturersList";
import { IManufacturer } from "../utils/types";

function useManufacturerList(isEnabled = true) {
  const { data, error, isLoading } = useQuery<IManufacturer[]>({
    queryKey: [QUERY_KEYS.Manufacturers],
    queryFn: getManufacturers,
    enabled: isEnabled,
  });

  const carManufacturers = useMemo(
    () => data?.filter((manufacturer) => manufacturer.is_car === "1") ?? [],
    [data],
  );

  const motorBikeManufacturers = useMemo(
    () => data?.filter((manufacturer) => manufacturer.is_moto === "1") ?? [],
    [data],
  );

  const specManufacturers = useMemo(
    () => data?.filter((manufacturer) => manufacturer.is_spec === "1") ?? [],
    [data],
  );

  return {
    manufacturers: data,
    carManufacturers,
    motorBikeManufacturers,
    specManufacturers,
    error,
    isLoading,
  };
}

export default useManufacturerList;
