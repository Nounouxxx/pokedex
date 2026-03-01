// src/ClientApp.tsx
"use client";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "@/components/Header";
import AppRouter from "./router/AppRouter";

export default function ClientApp() {  // ❌ plus de props
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  );
}