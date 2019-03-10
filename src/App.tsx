import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import counterStore from "./stores/counterStore";

const App = observer(() => {
  const counterContext = useContext(counterStore);

  return (
    <div>
      <button onClick={() => counterContext.count++}>Increment</button>
      {counterContext.count}
    </div>
  );
});

export default App;
