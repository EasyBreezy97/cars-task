import axiosInstance from "@/common/api/axiosInstance";

export const getProducts = async () => {
  const { data } = await axiosInstance.get(
    "https://api2.myauto.ge/ka/products/",
  );
  return data;
};
