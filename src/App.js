import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
//import { MenuOhana } from "./components/MenuOhana";
//import { MenuBurreria } from "./components/MenuBurreria";
import { MenuAmelia } from "./components/MenuAmelia";

function App() {
  return (
    <div className="bg-negro">
      <MenuAmelia />
    </div>
  );
}

export default App;
