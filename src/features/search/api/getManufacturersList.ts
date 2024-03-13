import axiosInstance from "@/common/api/axiosInstance";

export const getManufacturers = async () => {
  const { data } = await axiosInstance.get(
    "https://static.my.ge/myauto/js/mans.json",
  );
  return data;
};
