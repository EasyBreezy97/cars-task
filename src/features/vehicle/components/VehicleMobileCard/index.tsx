import Card from "@/common/components/Card";
import { FC } from "react";
import { ReactComponent as Gel } from "@/assets/Gel.svg";
import { ReactComponent as Compare } from "@/assets/Compare.svg";

interface IVehicleMobileCard {}

const VehicleMobileCard: FC<IVehicleMobileCard> = () => {
  return (
    <Card className="w-full p-4 grid grid-cols-4 rounded-2xl my-3">
      <div className="mt-2 flex">
        <div>
          <h2 className="font-bold mb-4 text-sm">
            <span className="rounded-lg bg-gold text-white px-2 py-1 font-bold text-sm">
              VIP
            </span>
            Land Rover Range Rover Sport 2014 წ
          </h2>
        </div>
        <div>
          <div>
            <span>139,014</span>
            <div>
              <Gel />
            </div>
            <span className="text-[#ff3b30] text-xs font-bold">
              განბაჟება 2,176 ₾
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="car"
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <div>
          <div className="flex items-center">
            <p className="pl-1 text-xs font-bold">200 000 კმ</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs font-bold">ავტომატიკა</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs font-bold">სედანი</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs font-bold">1.8 დატ ჰიბრიდი</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs font-bold">მარჯვენა</p>
          </div>
          <div className="flex items-center">
            <span className="pl-1 text-xs">რუსთავის ავტო</span>
          </div>
        </div>
        <div>
          <p className="text-xs pl-1 text-[#8996ae] font-b">
            589 ნახვა • 2 დღის წინ
          </p>
          <div>
            <Compare />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VehicleMobileCard;
