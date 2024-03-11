import { FC ,InputHTMLAttributes} from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const Input: FC<IInput> = ({ className = "", ...rest }) => {
  return (
    <input
      className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 bg-white-100 outline-none `}
      {...rest}
    />
  );
};
export default Input;
