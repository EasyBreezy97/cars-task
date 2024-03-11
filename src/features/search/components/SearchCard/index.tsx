import { FC } from "react";
import Card from "@/common/components/Card";
import { ReactComponent as Car } from "@/assets/Car.svg";
import { ReactComponent as Moto } from "@/assets/Moto.svg";
import { ReactComponent as Tractor } from "@/assets/Tractor.svg";
import { ReactComponent as Gel } from "@/assets/Gel.svg";
import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import Button from "@/common/components/Button";

interface ISearchCard {}

const SearchCard: FC<ISearchCard> = () => {
  return (
    <div>
      <Card className="w-[250px] rounded-s-md">
        <div className="flex w-full justify-between cursor-pointer bg-[#F9F9FB]">
          <div className="border border-solid border-[#E9E9F0]">
            <Car fill="#8C929B" />
          </div>
          <div>
            <Moto fill="#FD4100" />
          </div>
          <div className="border border-solid border-[#E9E9F0]">
            <Tractor fill="#8C929B" />
          </div>
        </div>
        <div className="block mx-auto w-[80%]">
          <div>
            <label>გარიგების ტიპი</label>
            <Select />
          </div>
          <div>
            <label>მწარმოებელი</label>
          </div>
          <div>
            <label>კატეგორია</label>
          </div>

          <div className="flex align-center">
            <span>ფასი</span>
            <span>
              <Gel />
            </span>
          </div>
          <div className="flex items-center">
            <Input placeholder="დან" className="w-20" />
            <span>-</span>
            <Input placeholder="მდე" className="w-20" />
          </div>
          <div>
            <Button className="bg-orange text-white w-full mt-12 mb-5">
              ძებნა
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchCard;
