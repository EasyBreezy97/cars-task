import { FC, useEffect, useState, useCallback, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";
import Card from "@/common/components/Card";
import { ReactComponent as Car } from "@/common/assets/Car.svg";
import { ReactComponent as Moto } from "@/common/assets/Moto.svg";
import { ReactComponent as Tractor } from "@/common/assets/Tractor.svg";
import { ReactComponent as Gel } from "@/common/assets/Gel.svg";
import { ReactComponent as ArrowLeft } from "@/common/assets/ArrowLeft.svg";
import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import Button from "@/common/components/Button";
import { ISearchCardInputs, VehicleType } from "../../utils/types";
import useManufacturerList from "../../hooks/useManufacturerList";
import { ISelectOptions } from "@/common/utils/types";
import useManufacturerModelsList from "../../hooks/useManufacturerModels";
import MessageText from "@/common/components/MessageText";
import useGetCategories from "../../hooks/useGetCategories";
import useVehicleCategoryOptions from "../../hooks/useVehicleCategoriesOption";
import getManufacturersByType from "../../utils/getManufacturerByType";
import useGetProducts from "../../hooks/useGetProducts";
import { AppContext } from "@/common/context/AppContext";

const agreementTypeOptions = [
  { value: "0", label: "იყიდება" },
  { value: "1", label: "ქირავდება" },
];

interface ISearchCard {}

const SearchCard: FC<ISearchCard> = () => {
  const { setSearchTerms, sortOrder, period } = useContext(AppContext);
  const { carCategories, specCategories, motorBikeCategories } =
    useGetCategories();

  const [vehicleType, setVehicleType] = useState(VehicleType.CAR);
  const [manufacturerOptions, setManufacturerOptions] = useState<
    ISelectOptions[]
  >([{ value: "", label: "ყველა მწარმოებელი" }]);
  const [vehicleModelOptions, setVehicleModelOptions] = useState<
    ISelectOptions[]
  >([{ value: "", label: "ყველა მოდელი" }]);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<ISearchCardInputs>();

  const { carManufacturers, motorBikeManufacturers, specManufacturers } =
    useManufacturerList();

  const selectedManufacturer = watch("manufacturer");

  const { models } = useManufacturerModelsList(selectedManufacturer);

  const { refetchProducts } = useGetProducts();

  const onSubmit: SubmitHandler<ISearchCardInputs> = (data) => {
    setSearchTerms({
      forRent: data.agreementType as "" | "0" | "1",
      manufacturerId: data.manufacturer,
      modelId: data.model,
      categoryId: data.category,
      priceFrom: data.priceFrom,
      priceTo: data.priceTo,
      typeId: String(vehicleType) as "0" | "1" | "2",
      sortOrder,
      period,
    });
    refetchProducts();
  };

  const handleManufacturerList = useCallback(() => {
    const options = getManufacturersByType(
      vehicleType,
      carManufacturers,
      specManufacturers,
      motorBikeManufacturers,
    );

    setManufacturerOptions(() => [
      { value: "", label: "ყველა მწარმოებელი" },
      ...options.map((man) => ({
        value: man.man_id,
        label: man.man_name,
      })),
    ]);
  }, [
    vehicleType,
    carManufacturers,
    specManufacturers,
    motorBikeManufacturers,
    setManufacturerOptions,
  ]);

  const handleModels = useCallback(() => {
    if (models)
      setVehicleModelOptions(() => [
        { value: "", label: "ყველა მოდელი" },
        ...models.data.map((model) => ({
          value: String(model.model_id),
          label: model.model_name,
        })),
      ]);
  }, [models, setVehicleModelOptions]);

  useEffect(() => {
    handleManufacturerList();
    handleModels();
  }, [handleManufacturerList, handleModels, reset]);

  const vehicleCategoryOptions = useVehicleCategoryOptions(
    vehicleType,
    carCategories,
    specCategories,
    motorBikeCategories,
  );

  const handleVehicleChange = (type: VehicleType) => {
    setVehicleType(type);
    reset();
    handleManufacturerList();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 text-sm flex items-center">
        <span>მთავარი</span> <ArrowLeft className="m-1" />
        <span>ძიება</span> <ArrowLeft className="m-1" fill="#fd4100" />
        <span className="text-orange">იყიდება</span>
      </div>
      <Card className="max-w-80 rounded-tl-xl rounded-tr-xl bg-[#E2E5EB]">
        <div className="flex w-full justify-between  cursor-pointer bg-[#F9F9FB] rounded-tl-xl rounded-tr-xl h-12">
          <div
            className={clsx(
              "border-b border-solid w-1/3 pt-3",
              vehicleType === VehicleType.CAR && "border-orange",
              vehicleType !== VehicleType.CAR && "border-[#E9E9F0]",
            )}
          >
            <Car
              onClick={() => {
                handleVehicleChange(VehicleType.CAR);
              }}
              fill={vehicleType === VehicleType.CAR ? "#FD4100" : "#8C929B"}
              className="m-auto"
            />
          </div>
          <div
            className={clsx(
              "border-b border-solid w-1/3 pt-3",
              vehicleType === VehicleType.SPEC && "border-orange",
              vehicleType !== VehicleType.SPEC && "border-[#E9E9F0]",
            )}
          >
            <Tractor
              onClick={() => {
                handleVehicleChange(VehicleType.SPEC);
              }}
              fill={vehicleType === VehicleType.SPEC ? "#FD4100" : "#8C929B"}
              className="m-auto"
            />
          </div>
          <div
            className={clsx(
              "border-b border-solid w-1/3 pt-3",
              vehicleType === VehicleType.MOTO && "border-orange",
              vehicleType !== VehicleType.MOTO && "border-[#E9E9F0]",
            )}
          >
            <Moto
              onClick={() => {
                handleVehicleChange(VehicleType.MOTO);
              }}
              fill={vehicleType === VehicleType.MOTO ? "#FD4100" : "#8C929B"}
              className="m-auto"
            />
          </div>
        </div>
        <div className="block mx-auto w-[80%]">
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">გარიგების ტიპი</label>
            <Select
              className="border border-slate-300"
              options={agreementTypeOptions}
              {...register("agreementType")}
            />
          </div>
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">მწარმოებელი</label>
            <Select
              className="border border-slate-300"
              options={manufacturerOptions}
              {...register("manufacturer")}
            />
          </div>
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">მოდელი</label>
            <Select
              className="border border-slate-300"
              options={vehicleModelOptions}
              {...register("model")}
            />
          </div>
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">კატეგორია</label>
            <Select
              className="border border-slate-300"
              options={vehicleCategoryOptions}
              {...register("category")}
            />
          </div>
          <div className="flex items-center justify-between my-6 border-t border-solid pt-3">
            <p className="text-sm">ფასი</p>
            <div className="bg-lightBlack p-2  rounded-full">
              <Gel fill="#fff" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Input
              placeholder="დან"
              className="w-1/2"
              {...register("priceFrom", {
                validate: (value) => {
                  if (value && getValues("priceTo")) {
                    return parseFloat(value) < parseFloat(getValues("priceTo"));
                  }
                },
              })}
            />
            <span className="p-1">-</span>
            <Input
              placeholder="მდე"
              className="w-1/2"
              {...register("priceTo")}
            />
          </div>
          {errors.priceFrom && (
            <MessageText>
              საწყისი ფასი ნაკლები ან ტოლი უნდა იყოს საბოლოო ფასზე
            </MessageText>
          )}
          <div className="pt-12 bg-white">
            <Button type="submit" className="bg-orange text-white w-full mb-5">
              ძებნა
            </Button>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default SearchCard;
