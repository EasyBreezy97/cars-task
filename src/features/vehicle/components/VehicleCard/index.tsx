import Card from "@/common/components/Card";
import { FC } from "react";
import { ReactComponent as Gel } from "@/assets/Gel.svg";
import { ReactComponent as Motor } from "@/assets/Motor.svg";
import { ReactComponent as HandleBar } from "@/assets/Handlebar.svg";
import { ReactComponent as Speed } from "@/assets/Speed.svg";
import { ReactComponent as GearBox } from "@/assets/GearBox.svg";
import { ReactComponent as Pen } from "@/assets/Pen.svg";
import { ReactComponent as Compare } from "@/assets/Compare.svg";
import { ReactComponent as Heart } from "@/assets/Heart.svg";

interface IVehicleCard {}

const VehicleCard: FC<IVehicleCard> = () => {
  return (
    <Card className="w-full p-4 grid grid-cols-4 rounded-2xl my-3">
      <div className="mt-2 flex">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="car"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="px-4 py-2 col-span-2">
        <span>
          <h2 className="font-bold mb-4 text-sm">
            Land Rover Range Rover Sport 2014 წ
          </h2>
        </span>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Motor />
            <p className="pl-1 text-xs font-bold">1.8 დატ ჰიბრიდი</p>
          </div>
          <div className="flex items-center">
            <Speed />
            <p className="pl-1 text-xs font-bold">200 000 კმ</p>
          </div>
          <div className="flex items-center">
            <GearBox />
            <p className="pl-1 text-xs font-bold">ავტომატიკა</p>
          </div>
          <div className="flex items-center">
            <HandleBar />
            <p className="pl-1 text-xs font-bold">მარჯვენა</p>
          </div>
        </div>
        <div className="mt-5 flex items-center">
          <span className="rounded-lg bg-gold text-white px-2 py-1 font-bold text-sm">
            VIP
          </span>
          <p className="text-xs pl-1 text-[#8996ae] font-b">
            589 ნახვა • 2 დღის წინ
          </p>
        </div>
      </div>
      <div className="p-4 grid grid-cols-2">
        <span className="text-[#ff3b30] text-xs font-bold">
          განბაჟება 2,176 ₾
        </span>
        <span className="text-xs pl-1">რუსთავის ავტო</span>
        <div className="col-[-2] text-xl font-bold self-center justify-self-center flex  items-center">
          139,014
          <div className="bg-[#e5e7eb] p-2 rounded-full ml-1">
            <Gel />
          </div>
        </div>
        <div className="col-[-2] flex justify-around self-end">
          <Pen />
          <Compare />
          <Heart />
        </div>
      </div>
    </Card>
  );
};

export default VehicleCard;
