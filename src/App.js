import "./App.css";
import Header from "../src/components/Header";
import Reviews from "../src/components/Reviews";
import Shows from "../src/components/Shows";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Shows />
        </section>
        <section>
          <Reviews />
        </section>
      </main>
    </>
  );
}

export default App;
