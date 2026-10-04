import Test from "./components/blocks/Test";
import Navigation from "./components/blocks/Navigation";
import Alert from "./components/blocks/Alert";
import Card1 from "./components/blocks/Card1";
import Card2 from "./components/blocks/Card2";
import Card3 from "./components/blocks/Card3";

function App() {
  return (
    <>
      <h3 className="text-center">Boostrap UI blocks</h3>
      <main className="container mt-4">
        <div className="vstack gap-3">
          <Test />
          <Navigation />
          <Alert />
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </main>
    </>
  );
}

export default App;
