import Select from "@/common/components/Select";
import { AppContext } from "@/common/context/AppContext";
import { FC, useContext } from "react";

const periodOptions = [
  { value: "1h", label: "1 საათი" },
  { value: "2h", label: "2 საათი" },
  { value: "3h", label: "3 საათი" },
  { value: "1d", label: "1 დღე" },
  { value: "2d", label: "2 დღე" },
  { value: "3d", label: "3 დღე" },
  { value: "1w", label: "1 კვირა" },
  { value: "2w", label: "2 კვირა" },
  { value: "3w", label: "3 კვირა" },
];

const sortOrderOptions = [
  { value: "1", label: "თარიღი კლებადი" },
  { value: "2", label: "თარიღი ზრდადი" },
  { value: "3", label: "ფასი კლებადი" },
  { value: "4", label: "ფასი ზრდადი" },
  { value: "5", label: "გარბენი კლებადი" },
  { value: "6", label: "გარბენი ზრდადი" },
];

interface IVehicleFilter {}

const VehicleFilter: FC<IVehicleFilter> = () => {
  const { setSearchTerms, statementCount } = useContext(AppContext);
  return (
    <div className="flex justify-between mb-2">
      <p>{statementCount} განცხადება</p>
      <div className="flex gap-2">
        <Select
          className="w-44"
          onChange={(e) => {
            setSearchTerms((prevState) => ({
              ...prevState,
              period: e.target.value,
            }));
          }}
          options={periodOptions}
        />
        <Select
          className="w-52"
          onChange={(e) => {
            setSearchTerms((prevState) => ({
              ...prevState,
              sortOrder: e.target.value,
            }));
          }}
          options={sortOrderOptions}
        />
      </div>
    </div>
  );
};

export default VehicleFilter;
