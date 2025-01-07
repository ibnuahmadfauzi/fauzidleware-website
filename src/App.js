import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artikel from "./pages/Artikel";
import Beranda from "./pages/Beranda";
import Kontak from "./pages/Kontak";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Produk from "./pages/Produk";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="produk" element={<Produk />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
