import { FC, InputHTMLAttributes, forwardRef, useState } from "react";
import clsx from "clsx";

interface ISelect extends InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<ISelect> = forwardRef<HTMLSelectElement, ISelect>(
  ({ className = "", options, onChange: outerOnChange, ...rest }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { selectedIndex } = e.target;
      setSelectedIndex(selectedIndex);
      if (outerOnChange) {
        outerOnChange(e);
      }
    };

    return (
      <select
        ref={ref}
        className={`${className} block w-full px-4 py-2 bg-white-100 rounded-md focus:outline-none focus:border-blue-500 text-sm cursor-pointer`}
        onChange={handleChange}
        {...rest}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className={clsx(
              index === selectedIndex && "bg-[#E2E5EB] font-bold",
              "text-sm leading-7",
            )}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  },
);

export default Select;
