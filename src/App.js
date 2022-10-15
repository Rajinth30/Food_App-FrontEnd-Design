import Food from "./Components/Food";
import HeadlineCards from "./Components/HeadlineCards";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Category from "./Components/Category";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
