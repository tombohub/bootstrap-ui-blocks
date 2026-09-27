import Test from "./components/blocks/Test";
import Navigation from "./components/blocks/Navigation";

function App() {
  return (
    <>
      <h3 className="text-center">Boostrap UI blocks</h3>
      <main className="container mt-4">
        <div className="vstack gap-3">
          <Test />
          <Navigation />
        </div>
      </main>
    </>
  );
}

export default App;
