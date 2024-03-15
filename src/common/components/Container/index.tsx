import { FC, ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return (
    <div className="w-full md:mx-auto 2xl:px-[150px] bg-darkGrey h-screen">
      {children}
    </div>
  );
};

export default Container;
