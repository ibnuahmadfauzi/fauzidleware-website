import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Artikel from "./pages/Artikel";
import Beranda from "./pages/Beranda";
import Kontak from "./pages/Kontak";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Produk from "./pages/Produk";
import ArtikelDetail from "./pages/ArtikelDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="produk" element={<Produk />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/cari/:keyword" element={<Artikel />} />
          <Route
            path="artikel/cari"
            element={<Navigate to="/artikel" replace />}
          />
          <Route path="artikel/:slug" element={<ArtikelDetail />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
