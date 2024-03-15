import { IProductsParams } from "@/features/search/api/getProducts";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProps {
  searchTerms: IProductsParams;
  setSearchTerms: Dispatch<SetStateAction<IProductsParams>>;
  sortOrder: string;
  setSortOrder: Dispatch<SetStateAction<string>>;
  period: string;
  setPeriod: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<ContextProps>({
  searchTerms: {
    forRent: "",
    manufacturerId: "",
    categoryId: "",
    priceFrom: "",
    priceTo: "",
    period: "",
    sortOrder: "1",
    typeId: "0",
  },
  setSearchTerms: () => {},
  sortOrder: "1",
  setSortOrder: () => {},
  period: "1h",
  setPeriod: () => {},
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState<IProductsParams>({
    forRent: "",
    manufacturerId: "",
    categoryId: "",
    priceFrom: "",
    priceTo: "",
    period: "",
    sortOrder: "1",
    typeId: "0",
  });
  const [sortOrder, setSortOrder] = useState("1");
  const [period, setPeriod] = useState("1h");
  return (
    <AppContext.Provider
      value={{
        searchTerms,
        setSearchTerms,
        sortOrder,
        setSortOrder,
        period,
        setPeriod,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
