import { FC } from "react";
import VehicleMobileCard from "../VehicleMobileCard";
import useGetProducts from "@/features/search/hooks/useGetProducts";
import Spinner from "@/common/components/Spinner";

interface IVehicleMobileContent {}

const VehicleMobileContent: FC<IVehicleMobileContent> = () => {
  const { products, isLoading } = useGetProducts();

  return (
    <div className="pt-3">
      {isLoading && <Spinner />}
      {products?.map((product) => (
        <VehicleMobileCard key={product.car_id} product={product} />
      ))}{" "}
    </div>
  );
};

export default VehicleMobileContent;
