import Container from "@/common/components/Container";
import Header from "@/common/components/Header";
import SearchCard from "@/features/search/components/SearchCard";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SearchCard />
      </Container>
    </div>
  );
}

export default App;
