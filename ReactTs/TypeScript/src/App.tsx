import { ChaiCard } from "./chaicard";
import { Counter } from "./counter";
function App() {
  return (
    <>
      <div>
        <h1>heheh sami tsx</h1>
        <ChaiCard
          name="sami new chai"
          price={10}
          isCold={true}
        />
        <ChaiCard
          name="heheh NEW  coffee"
          price={20}
          isCold={false}
        />

        <Counter />
      </div>
    </>
  );
}

export default App;
