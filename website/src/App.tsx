import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SobreLayout from "./layouts/SobreLayout";
import Home from "./pages/Home";
import Historia from "./pages/Sobre/Historia";
import Missao from "./pages/Sobre/Missao";
import VisaoFuturo from "./pages/Sobre/VisaoFuturo";
import { Contact } from "./pages/Contact";
import SobreIndex from "./pages/Sobre/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contato" element={<Contact />} />

          {/* Rota aninhada para "Sobre" */}
          <Route path="sobre" element={<SobreLayout />}>
            <Route index element={<SobreIndex />} />
            <Route path="historia" element={<Historia />} />
            <Route path="missao" element={<Missao />} />
            <Route path="visao-futuro" element={<VisaoFuturo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
