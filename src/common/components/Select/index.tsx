import { FC, InputHTMLAttributes } from "react";

interface ISelect extends InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  // options: T[];
}
const Select: FC<ISelect> = ({ className = "", ...rest }) => {
  return (
    <select
      className="block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      {...rest}
    >
      <option value="1" className="bg-[#E2E5EB] font-bold">
        Option 1
      </option>
      <option value="2" className="bg-[#E2E5EB]">
        Option 2
      </option>
      <option value="3" className="bg-[#E2E5EB]">
        Option 3
      </option>
      <option value="4" className="bg-[#E2E5EB]">
        Option 4
      </option>
    </select>
  );
};
export default Select;
