import { QUERY_KEYS } from "@/common/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import { IProductsResponse } from "../utils/types";
import { useContext } from "react";
import { AppContext } from "@/common/context/AppContext";

function useGetProducts() {
  const { searchTerms, setStatementCount } = useContext(AppContext);
  const { data, error, isLoading, refetch } = useQuery<IProductsResponse>({
    queryKey: [QUERY_KEYS.Products, searchTerms],
    queryFn: () => getProducts(searchTerms),
    enabled: !!searchTerms,
  });

  if (data?.data) setStatementCount(data?.data?.items.length);

  return {
    products: data?.data?.items,
    refetchProducts: refetch,
    isLoading,
    error,
  };
}

export default useGetProducts;
