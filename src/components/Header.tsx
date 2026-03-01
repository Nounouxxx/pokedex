"use client";

import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo à gauche */}
        <Box
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={220}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Sélecteur de langue à droite */}
        <LanguageSelector />
      </Toolbar>
    </AppBar>
  );
}