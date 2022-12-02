import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bandas from "./components/bandas";
import Detail from "./components/detail"





function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bandas />} />
         <Route path="/bandas" element={<Bandas />} />
         <Route path="/bandas/:bandaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
