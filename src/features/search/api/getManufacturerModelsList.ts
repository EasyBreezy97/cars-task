import axiosInstance from "@/common/api/axiosInstance";

export const getManufacturerModelsList = async (manufacturerId: string) => {
  const { data } = await axiosInstance.get(
    `https://api2.myauto.ge/ka/getManModels?man_id=${manufacturerId}`,
  );

  return data;
};
