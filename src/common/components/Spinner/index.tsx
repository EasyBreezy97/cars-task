import { FC } from "react";

interface ISpinner {}

const Spinner: FC<ISpinner> = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-orange" />
    </div>
  );
};

export default Spinner;
