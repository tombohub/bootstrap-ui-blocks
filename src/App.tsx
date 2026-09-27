import Test from "./components/blocks/Test";
import Navigation from "./components/blocks/Navigation";

function App() {
  return (
    <>
      <main className="container mt-4">
        <div className="vstack gap-3">
          <div className="card">
            <Test />
          </div>
          <div className="card">
            <Navigation />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
