import { FC } from "react";
import Card from "@/common/components/Card";
import { ReactComponent as Car } from "@/assets/Car.svg";
import { ReactComponent as Moto } from "@/assets/Moto.svg";
import { ReactComponent as Tractor } from "@/assets/Tractor.svg";
import { ReactComponent as Gel } from "@/assets/Gel.svg";
import { ReactComponent as ArrowLeft } from "@/assets/ArrowLeft.svg";
import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import Button from "@/common/components/Button";

const agreementTypeOptions = [
  { value: "0", label: "იყიდება" },
  { value: "1", label: "ქირავდება" },
];

interface ISearchCard {}

const SearchCard: FC<ISearchCard> = () => {
  return (
    <div>
      <div className="mb-6 text-sm flex items-center">
        <span>მთავარი</span> <ArrowLeft className="m-1" />
        <span>ძიება</span> <ArrowLeft className="m-1" fill="#fd4100" />
        <span className="text-orange">იყიდება</span>
      </div>
      <Card className="max-w-80 rounded-tl-xl rounded-tr-xl bg-[#E2E5EB]">
        <div className="flex w-full justify-between  cursor-pointer bg-[#F9F9FB] rounded-full h-12">
          <div className="border border-solid border-[#E9E9F0] w-1/3 pt-3 ">
            <Car fill="#8C929B" className="m-auto" />
          </div>
          <div className="border border-solid border-[#E9E9F0] w-1/3 pt-3">
            <Tractor fill="#8C929B" className="m-auto" />
          </div>
          <div className="border-b border-solid border-orange w-1/3 pt-3">
            <Moto fill="#FD4100" className="m-auto bg-white" />
          </div>
        </div>
        <div className="block mx-auto w-[80%]">
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">გარიგების ტიპი</label>
            <Select
              className="border border-slate-300"
              options={agreementTypeOptions}
            />
          </div>
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">მწარმოებელი</label>
            <Select
              className="border border-slate-300"
              options={agreementTypeOptions}
            />
          </div>
          <div className="my-2">
            <label className="inline-block mb-1 text-sm">კატეგორია</label>
            <Select
              className="border border-slate-300"
              options={agreementTypeOptions}
            />
          </div>
          <div className="flex items-center justify-between my-6 border-t border-solid pt-3">
            <p className="text-sm">ფასი</p>
            <div className="bg-darkGrey p-2  rounded-full">
              <Gel fill="#fff" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Input placeholder="დან" className=" w-1/2" />
            <span className="p-1">-</span>
            <Input placeholder="მდე" className=" w-1/2" />
          </div>
          <div className="shadow pt-12 bg-white">
            <Button className="bg-orange text-white w-full mb-5">ძებნა</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchCard;
