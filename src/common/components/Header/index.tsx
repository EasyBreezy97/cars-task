import { FC } from "react";
import { ReactComponent as Logo } from "@/common/assets/Logo.svg";

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <header className="bg-white fixed h-16 w-full md:mx-auto 2xl:px-[150px] flex items-center">
      <Logo
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </header>
  );
};
export default Header;
