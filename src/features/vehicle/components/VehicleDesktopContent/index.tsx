import { FC } from "react";
import VehicleCard from "../VehicleCard";
import VehicleFilter from "../VehicleFilter";
import useGetProducts from "@/features/search/hooks/useGetProducts";
import Spinner from "@/common/components/Spinner";

interface IVehicleDesktopContent {}

const VehicleDesktopContent: FC<IVehicleDesktopContent> = () => {
  const { products, isLoading } = useGetProducts();

  return (
    <section>
      <VehicleFilter />
      <div>
        {isLoading && <Spinner />}
        {products?.map((product) => (
          <VehicleCard key={product.car_id} product={product} />
        ))}
      </div>
    </section>
  );
};
9;
export default VehicleDesktopContent;
