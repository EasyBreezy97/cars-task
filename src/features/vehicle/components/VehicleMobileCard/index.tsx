import Card from "@/common/components/Card";
import { FC, useMemo } from "react";
import { ReactComponent as Gel } from "@/common/assets/Gel.svg";
import { ReactComponent as Compare } from "@/common/assets/Compare.svg";
import { ReactComponent as Note } from "@/common/assets/Note.svg";
import { IProductItem } from "@/features/search/utils/types";
import useManufacturerList from "@/features/search/hooks/useManufacturerList";
import { GEAR_TYPES } from "@/common/utils/constants";
import {
  formatNumber,
  formatNumberWithSpace,
} from "@/common/utils/numberFormatter";
import useGetCategories from "@/features/search/hooks/useGetCategories";

interface IVehicleMobileCard {
  product: IProductItem;
}

const VehicleMobileCard: FC<IVehicleMobileCard> = ({ product }) => {
  const { manufacturers } = useManufacturerList();
  const { categoryData } = useGetCategories();

  const manufacturerName = useMemo(() => {
    return manufacturers?.find(
      (man) => Number(man.man_id) === Number(product.man_id),
    )?.man_name;
  }, [manufacturers, product.man_id]);

  const categoryName = useMemo(() => {
    return categoryData?.data?.find(
      (category) =>
        Number(category.category_id) === Number(product.category_id),
    )?.title;
  }, [categoryData?.data, product.category_id]);

  return (
    <Card className="w-full pt-3">
      <div className="px-6">
        <div>
          <h2 className="font-bold mb-4 text-sm h-5">
            {product?.special_persons && (
              <span className="rounded-lg bg-gold text-white px-2 py-1 font-bold text-sm mr-1">
                VIP
              </span>
            )}
            {manufacturerName} {product?.car_model} {product?.prod_year} წ
          </h2>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="font-bold text-xl">
              {formatNumber(product?.price_value)}
            </span>
            <div className="mx-1 bg-darkGrey p-2 rounded-full">
              <Gel />
            </div>
          </div>
          <div
            className={` ${
              product?.is_payd ? "text-[#26B753]" : "text-[#ff3b30]"
            }  text-xs font-bold  ${
              product?.is_payd ? "bg-[#EEFBF1]" : "bg-[#FFE3E3]"
            }  px-3 py-2 rounded-lg`}
          >
            {product?.is_payd ? "✓ განბაჟებული" : "განბაჟება 2,176 ₾"}
          </div>
        </div>
        <div className="py-3">
          <img
            src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
            alt="car"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 px-6 pb-3">
          <div className="flex items-center">
            <p className="pl-1 text-xs">
              {formatNumberWithSpace(product?.car_run_km)} კმ
            </p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">{GEAR_TYPES[product?.gear_type_id]}</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">{categoryName}</p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">
              {Number(product?.engine_volume / 1000)?.toFixed(1)} დატ ჰიბრიდი
            </p>
          </div>
          <div className="flex items-center">
            <p className="pl-1 text-xs">
              {product?.right_wheel ? "მარჯვენა" : "მარცხენა"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="pl-1 text-xs">{product?.client_name}</span>
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
