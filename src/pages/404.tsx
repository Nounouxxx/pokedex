// src/pages/404.tsx
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";


export default function Custom404() {
  const navigate = useNavigate();
    
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        p: 4,
        textAlign: "center",
        backgroundColor: "#ffffff00",
      }}
    >
      
      {/* Titre */}
      <Typography variant="h4" sx={{ mt: -20, mb: 3, color: "#ffffff", fontWeight: 600 }}>
        Page non trouvée
      </Typography>

      {/* Image 404 */}
      <Box>
        <img
          src="/erreur404.png"
          alt="Erreur 404"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 8,
          }}
        />
      </Box>
      
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        sx={{
          mt: 3,
          borderColor: "red",        // contour rouge
          color: "white",              // texte rouge
          backgroundColor: "rgba(128,128,128,0.2)", // gris semi-transparent
          "&:hover": {
          backgroundColor: "rgba(128,128,128,0.3)", // légèrement plus foncé au survol
          borderColor: "red",
          },
        }}
>
  Revenir à l'accueil
</Button>
    </Box>
  );
}