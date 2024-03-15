import { QUERY_KEYS } from "@/common/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import { IProductsResponse } from "../utils/types";

function useGetProducts() {
  const { data, error, isLoading, refetch } = useQuery<IProductsResponse>({
    queryKey: [QUERY_KEYS.Products],
    queryFn: getProducts,
    enabled: true,
  });

  return {
    products: data?.data?.items,
    refetchProducts: refetch,
    isLoading,
    error,
  };
}

export default useGetProducts;
