"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  CardMedia,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "@/types/pokemon";

interface TypesJSON {
  [key: string]: {
    backgroundColor: string;
    translations: Record<string, string>;
  };
}

interface PokemonCardProps {
  pokemon: Pokemon;
  types: TypesJSON;
  language: string;
}

export default function PokemonCard({
  pokemon,
  types,
  language,
}: PokemonCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 250,
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "white", // fond blanc uniforme
        borderRadius: 5, // coins arrondis
        position: "relative",
        boxShadow: 1,
      }}
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      {/* ID en haut à gauche */}
    <Typography
  variant="caption"
      sx={{
        position: "absolute",
        top: 8,
        left: 8,
        fontWeight: "bold",
        color: "#000", // texte noir
        backgroundColor: "rgba(255, 255, 255, 0.7)", // léger fond blanc semi-transparent pour contraste
        padding: "2px 4px",
        borderRadius: 1,
      }}
    >
  #{pokemon.id.toString().padStart(3, "0")}
</Typography>

      {/* Image */}
      <CardMedia
        component="img"
        height="180"
        image={pokemon.image}
        alt={pokemon.names[language]}
        sx={{
          objectFit: "contain",
          backgroundColor: "white",
          mt: 5,
        }}
      />

      <CardContent sx={{ backgroundColor: "#fff", paddingTop: 1 }}>
  <Typography 
    variant="h6" 
    sx={{ color: "#000", fontWeight: 800 }} // couleur noire bien visible
  >
    {pokemon.names[language]}
  </Typography>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: 1,
      flexWrap: "wrap",
      mt: 1,
    }}
  >
    {pokemon.types.map((typeKey) => {
      const typeInfo = types[typeKey];
      return (
        <Chip
          key={typeKey}
          label={typeInfo.translations[language]}
          sx={{
            backgroundColor: typeInfo.backgroundColor,
            color: "#fff",
          }}
        />
      );
    })}
  </Box>
</CardContent>
    </Card>
  );
}