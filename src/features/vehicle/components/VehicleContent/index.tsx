import { FC } from "react";
import VehicleCard from "../VehicleCard";
import VehicleFilter from "../VehicleFilter";
import useGetProducts from "@/features/search/hooks/useGetProducts";

interface IVehicleContent {}

const VehicleContent: FC<IVehicleContent> = () => {
  const { products } = useGetProducts();

  return (
    <section >
      <VehicleFilter />
      <div>
        {products?.map((product) => (
          <VehicleCard key={product.car_id} product={product} />
        ))}
      </div>
    </section>
  );
};
9;
export default VehicleContent;
