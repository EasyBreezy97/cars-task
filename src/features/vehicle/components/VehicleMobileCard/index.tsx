import Card from "@/common/components/Card";
import { FC } from "react";
import { ReactComponent as Gel } from "@/assets/Gel.svg";
import { ReactComponent as Compare } from "@/assets/Compare.svg";
import { ReactComponent as Note } from "@/assets/Note.svg";

interface IVehicleMobileCard {}

const VehicleMobileCard: FC<IVehicleMobileCard> = () => {
  return (
    <Card className="w-full pt-3">
      <div className="px-6">
        <div>
          <h2 className="font-bold mb-4 text-sm h-5">
            <span className="rounded-lg bg-gold text-white px-2 py-1 font-bold text-sm mr-1">
              VIP
            </span>
            Land Rover Range Rover Sport 2014 წ
          </h2>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="font-bold text-xl">139,014</span>
            <div className="mx-1 bg-[#e5e7eb]  p-2 rounded-full">
              <Gel />
            </div>
          </div>
          <div className="text-[#ff3b30] text-xs font-bold bg-[#FFE3E3] px-3 py-2 rounded-lg">
            განბაჟება 2,176 ₾
          </div>
        </div>
        <div className="py-3">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="car"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 px-6 pb-3">
          <div className="flex items-center">
            <p className="pl-1 text-xs">200 000 კმ</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">ავტომატიკა</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">სედანი</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">1.8 დატ ჰიბრიდი</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">მარჯვენა</p>
          </div>
          <div className="flex items-center">
            <span className="pl-1 text-xs">რუსთავის ავტო</span>
          </div>
        </div>
        <div className="border-t border-gray-300 pb-2"></div>
        <div className="flex justify-between px-6 py-3">
          <p className="text-xs pl-1 text-lighterGrey font-b">
            589 ნახვა • 2 დღის წინ
          </p>
          <div className="flex items-center">
            <Compare fill="#8996ae" />
            <Note />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VehicleMobileCard;
