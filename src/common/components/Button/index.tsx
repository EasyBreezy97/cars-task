import React, { FC , ReactNode} from "react";

interface IButton {
  children: ReactNode;
  className?: string;
}

const Button: FC<IButton> = ({
  children,
  className = "",
  ...rest
}: IButton) => {
  return (
    <button className={`${className} font-bold py-2 px-4 rounded-lg`} {...rest}>
      {children}
    </button>
  );
};
export default Button;
