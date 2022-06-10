import React from "react";
import Headers from "./components/Headers";
import Menus from "./components/Menus";
import "./css/headers.css";
import "./css/menus.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Headers></Headers>
        
        <section>
           <Menus></Menus>
        </section>

      </div>
    </>
  );
}

export default App;
