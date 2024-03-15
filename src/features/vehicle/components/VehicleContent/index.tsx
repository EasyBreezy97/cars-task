import { FC } from "react";
import VehicleCard from "../VehicleCard";
import VehicleFilter from "../VehicleFilter";
import useGetProducts from "@/features/search/hooks/useGetProducts";
import { IProductItem } from "@/features/search/utils/types";

interface IVehicleContent {
  product: IProductItem;
}

const VehicleContent: FC<IVehicleContent> = () => {
  const { products } = useGetProducts();
  return (
    <section>
      <VehicleFilter />

      {products?.map((product) => (
        <VehicleCard key={product.car_id} product={product} />
      ))}
    </section>
  );
};
9;
export default VehicleContent;
