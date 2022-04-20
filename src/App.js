import React from "react";
import Pet from "./components/Pet";

function App() {
  return (
    <div>
      <h1>"Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    </div>
  );
}

export default App;
