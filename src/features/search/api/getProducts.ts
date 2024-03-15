import axiosInstance from "@/common/api/axiosInstance";

export interface IProductsParams {
  forRent?: "" | "0" | "1";
  manufacturerId?: string;
  modelId?: string;
  categoryId?: string;
  priceFrom?: string;
  priceTo?: string;
  period?: string;
  sortOrder?: string;
  typeId: "0" | "1" | "2";
}

export const getProducts = async ({
  forRent = "",
  manufacturerId = "",
  modelId,
  categoryId = "",
  priceFrom = "",
  priceTo = "",
  period = "",
  sortOrder = "1",
  typeId = "0",
}: Partial<IProductsParams> = {}) => {
  const { data } = await axiosInstance.get(
    `https://api2.myauto.ge/ka/products/?ForRent=${forRent}&Mans=${manufacturerId}${
      manufacturerId && categoryId ? "." : ""
    }${modelId}&Cats=${categoryId}&PriceFrom=${priceFrom}&PriceTo=${priceTo}&Period=${period}&SortOrder=${sortOrder}&TypeID=${typeId}`,
  );
  return data;
};
