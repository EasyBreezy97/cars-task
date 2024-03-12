import { FC } from "react";
import VehicleCard from "../VehicleCard";
import VehicleFilter from "../VehicleFilter";

interface IVehicleContent {}

const VehicleContent: FC<IVehicleContent> = () => {
  return (
    <section>
      <VehicleFilter />
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
    </section>
  );
};

export default VehicleContent;
