import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotionDetail from "./pages/NotionDetail";
import Methode from "./pages/Methode";
import Ponts from "./pages/Ponts";
import Classement from "./pages/Classement";
import Profil from "./pages/Profil";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-7xl text-brand">404</p>
      <h1 className="font-display text-2xl mt-2 mb-4">Cette page n'existe pas</h1>
      <Link to="/" className="btn btn-primary mx-auto">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notion/:id" element={<NotionDetail />} />
        <Route path="/methode" element={<Methode />} />
        <Route path="/ponts" element={<Ponts />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
