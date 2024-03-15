import useIsMobile from "@/common/hooks/useIsMobile";
import { FC } from "react";
import VehicleMobileContent from "./VehicleMobileContent";
import SearchCard from "@/features/search/components/SearchCard";
import VehicleDesktopContent from "./VehicleDesktopContent";

interface IVehicleContent {}

const VehicleContent: FC<IVehicleContent> = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {" "}
      {isMobile ? (
        <div>
          <VehicleMobileContent />
        </div>
      ) : (
        <div className="grid grid-cols-4 bg-darkGrey">
          <div className="w-300 p-4 sm:hidden lg:block ">
            <SearchCard />
          </div>
          <div className="p-4 lg:col-span-3 sm:col-span-4">
            <VehicleDesktopContent />
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleContent;
