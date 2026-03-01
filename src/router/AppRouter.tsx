"use client";

import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PokemonDetail from "@/pages/PokemonDetail";
import NotFound from "@/pages/404";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}