import Container from "@/common/components/Container";
import Header from "@/common/components/Header";
import SearchCard from "@/features/search/components/SearchCard";
import VehicleContent from "./features/vehicle/components/VehicleContent";
import useIsMobile from "@/common/hooks/useIsMobile";
import VehicleMobileCard from "./features/vehicle/components/VehicleMobileCard";

function App() {
  const isMobile = useIsMobile();

  console.log({ isMobile });

  return (
    <div>
      <Header />
      <Container>
        {isMobile ? (
          <div>
            <VehicleMobileCard />
          </div>
        ) : (
          <div className="grid grid-cols-4">
            <div className="w-300 p-4 md:hidden lg:block">
              <SearchCard />
            </div>
            <div className="p-4 lg:col-span-3 md:col-span-4">
              <VehicleContent />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
