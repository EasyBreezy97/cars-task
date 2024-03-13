import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef(
  ({ className = "", ...rest }: IInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 bg-white-100 outline-none `}
        {...rest}
      />
    );
  },
);

export default Input;
