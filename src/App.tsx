import Container from "@/common/components/Container";
import Header from "@/common/components/Header";
import { AppProvider } from "./common/context/AppContext";
import VehicleContent from "./features/vehicle/components";

function App() {
  return (
    <AppProvider>
      <div>
        <div className="pb-20">
          <Header />
        </div>
        <Container>
          <VehicleContent />
        </Container>
      </div>
    </AppProvider>
  );
}

export default App;
