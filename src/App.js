import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { MenuOhana } from "./components/MenuOhana";

function App() {
  return (
    <div className="bg-negro">
      <MenuOhana />
    </div>
  );
}

export default App;
