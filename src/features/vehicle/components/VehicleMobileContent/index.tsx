import { FC } from "react";
import VehicleMobileCard from "../VehicleMobileCard";
import useGetProducts from "@/features/search/hooks/useGetProducts";

interface IVehicleMobileContent {}

const VehicleMobileContent: FC<IVehicleMobileContent> = () => {
  const { products } = useGetProducts();

  return (
    <div className="pt-3">
      {products?.map((product) => (
        <VehicleMobileCard key={product.car_id} product={product} />
      ))}{" "}
    </div>
  );
};

export default VehicleMobileContent;
