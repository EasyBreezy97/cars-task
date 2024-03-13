import Container from "@/common/components/Container";
import Header from "@/common/components/Header";
import SearchCard from "@/features/search/components/SearchCard";
import VehicleContent from "./features/vehicle/components/VehicleContent";
import useIsMobile from "@/common/hooks/useIsMobile";
import VehicleMobileContent from "./features/vehicle/components/VehicleMobileContent";

function App() {
  const isMobile = useIsMobile();

  return (
    <div>
      <Header />
      <Container>
        {isMobile ? (
          <div>
            <VehicleMobileContent />
          </div>
        ) : (
          <div className="grid grid-cols-4">
            <div className="w-300 p-4 sm:hidden lg:block">
              <SearchCard />
            </div>
            <div className="p-4 lg:col-span-3 sm:col-span-4">
              <VehicleContent />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
