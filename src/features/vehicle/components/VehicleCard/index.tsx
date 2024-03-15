import Card from "@/common/components/Card";
import { FC, useMemo } from "react";
import { ReactComponent as Gel } from "@/common/assets/Gel.svg";
import { ReactComponent as Motor } from "@/common/assets/Motor.svg";
import { ReactComponent as HandleBar } from "@/common/assets/Handlebar.svg";
import { ReactComponent as Speed } from "@/common/assets/Speed.svg";
import { ReactComponent as GearBox } from "@/common/assets/GearBox.svg";
import { ReactComponent as Pen } from "@/common/assets/Pen.svg";
import { ReactComponent as Compare } from "@/common/assets/Compare.svg";
import { ReactComponent as Heart } from "@/common/assets/Heart.svg";
import { IProductItem } from "@/features/search/utils/types";
import { GEAR_TYPES } from "@/common/utils/constants";
import useManufacturerList from "@/features/search/hooks/useManufacturerList";
import {
  formatNumber,
  formatNumberWithSpace,
} from "@/common/utils/numberFormatter";

interface IVehicleCard {
  product: IProductItem;
}

const VehicleCard: FC<IVehicleCard> = ({ product }) => {
  const { manufacturers } = useManufacturerList(false);

  const manufacturerName = useMemo(() => {
    return manufacturers?.find(
      (man) => Number(man.man_id) === Number(product.man_id),
    )?.man_name;
  }, [manufacturers, product.man_id]);

  return (
    <Card className="w-full p-4 grid grid-cols-4 rounded-2xl my-3">
      <div className="mt-2 flex">
        <img
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt="car"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="px-4 py-2 col-span-2">
        <span>
          <h2 className="font-bold mb-4 text-sm">
            {manufacturerName} {product?.car_model} {product?.prod_year} წ
          </h2>
        </span>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Motor />
            <p className="pl-1 text-xs font-bold">
              {Number(product?.engine_volume / 1000)?.toFixed(1)} დატ ჰიბრიდი
            </p>
          </div>
          <div className="flex items-center">
            <Speed />
            <p className="pl-1 text-xs font-bold">
              {formatNumberWithSpace(product?.car_run_km)} კმ
            </p>
          </div>
          <div className="flex items-center">
            <GearBox />
            <p className="pl-1 text-xs font-bold">
              {GEAR_TYPES[product?.gear_type_id]}
            </p>
          </div>
          <div className="flex items-center">
            <HandleBar />
            <p className="pl-1 text-xs font-bold">
              {product?.right_wheel ? "მარჯვენა" : "მარცხენა"}
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center">
          {product.special_persons && (
            <span className="rounded-lg bg-gold text-white px-2 py-1 font-bold text-sm">
              VIP
            </span>
          )}

          <p className="text-xs pl-1 text-[rgb(137,150,174)] font-b">
            {product?.views} ნახვა • {product?.daily_views?.insert_Date}
          </p>
        </div>
      </div>
      <div className="lg:py-4 sm:pr-2 grid grid-cols-2">
        <span
          className={`${
            product?.is_payd ? "text-[#26B753]" : "text-[#ff3b30]"
          } text-xs font-bold`}
        >
          {product?.is_payd ? "✓განბაჟებული" : "გასანბაჟებელი"}
        </span>
        <span className="text-xs pl-1 justify-self-center overflow-hidden whitespace-nowrap max-w-[100px] md:max-w-[50px] lg:max-w-[40px] xl:max-w-[100px] truncate">
          {product?.client_name}
        </span>
        <div className="col-[-2] text-xl font-bold self-center justify-self-center flex  items-center">
          {formatNumber(product?.price_value)}
          <div className="bg-darkGrey p-2 rounded-full ml-1">
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
