import axiosInstance from "@/common/api/axiosInstance";

export const getCategories = async () => {
  const { data } = await axiosInstance.get(
    "https://api2.myauto.ge/ka/cats/get",
  );
  return data;
};
