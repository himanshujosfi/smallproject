import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiScreenForm from "./Pages/MultiScreenForm";
import Dashboard from "./Pages/Dashboard";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./index.css"
import SpeechReader from "./Pages/SpeechReader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/multiplescreen" element={<MultiScreenForm />} />
        <Route path="/speetchreader" element={<SpeechReader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
