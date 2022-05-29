import "./App.css";
import Header from "../src/components/Header";
import Reviews from "../src/components/Reviews";
import Shows from "../src/components/Shows";

function App() {
  return (
    <div className="space-y-36">
      <header>
        <Header />
      </header>
      <main className="max-w-7xl m-auto space-y-28">
        <section>
          <Shows />
        </section>
        <section>
          <Reviews />
        </section>
      </main>
    </div>
  );
}

export default App;
