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
  return (
    <AppContext.Provider value={{ searchTerms, setSearchTerms }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
