import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface ISelect extends InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: { value: string; label: string }[];
}
const Select: FC<ISelect> = ({ className = "", options, ...rest }) => {
  return (
    <select
      className={`${className} block w-full px-4 py-2 bg-white-100 rounded-md focus:outline-none focus:border-blue-500 text-sm cursor-pointer`}
      {...rest}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          className={clsx(index === 2 && "bg-[#E2E5EB] font-bold", "text-sm")}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
