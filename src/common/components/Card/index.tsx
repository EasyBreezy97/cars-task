import { FC, ReactNode } from "react";

interface ICard {
  children: ReactNode;
  className: string;
}
const Card: FC<ICard> = ({ children, className }) => {
  return <div className={`${className} bg-white shadow`}>{children}</div>;
};

export default Card;
