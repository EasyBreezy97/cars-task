import { FC } from "react";
import VehicleMobileCard from "../VehicleMobileCard";

interface IVehicleMobileContent {}

const VehicleMobileContent: FC<IVehicleMobileContent> = () => {
  return (
    <div className="pt-3">
      <VehicleMobileCard />
      <VehicleMobileCard />
      <VehicleMobileCard />
    </div>
  );
};

export default VehicleMobileContent;
