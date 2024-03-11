import { FC } from "react";
import { ReactComponent as Logo } from "@/assets/Logo.svg";

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <header className="bg-white h-16 w-full md:mx-auto 2xl:px-[150px] flex items-center">
      <Logo />
    </header>
  );
};
export default Header;
