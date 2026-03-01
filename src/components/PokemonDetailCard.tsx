// src/components/PokemonDetailCard.tsx
"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  CardMedia,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
} from "@mui/material";
import { Pokemon } from "@/types/pokemon";

interface TypesJSON {
  [key: string]: {
    backgroundColor: string;
    translations: Record<string, string>;
  };
}

interface PokemonDetailCardProps {
  pokemon: Pokemon;
  types: TypesJSON;
  language: string;
}

export default function PokemonDetailCard({
  pokemon,
  types,
  language,
}: PokemonDetailCardProps) {
  const [movesOpen, setMovesOpen] = useState(false);

  const handleOpenMoves = () => setMovesOpen(true);
  const handleCloseMoves = () => setMovesOpen(false);

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        borderRadius: 2,
        backgroundColor: "#fff",
        textAlign: "center",
        p: 2,
      }}
    >
      {/* ID en haut à gauche */}
    <Box sx={{ position: "relative" }}>
    <Typography
    variant="subtitle2"
    sx={{ position: "absolute", top: 8, left: 8, color: "#000" }}
    >
    #{String(pokemon.id).padStart(3, "0")}
    </Typography>
    </Box>

      {/* Nom */}
      <Typography 
        variant="h5" 
        sx={{ color: "#070707", mt: 5, mb: -2, fontWeight: 600, fontSize: "2rem" }}
    >
        {pokemon.names[language]}
      </Typography>

      {/* Image */}
      <CardMedia
        component="img"
        image={pokemon.image}
        alt={pokemon.names[language]}
        sx={{
          objectFit: "contain",
          height: 250,
          mt: 2,
        }}
      />

      {/* Types */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          flexWrap: "wrap",
          mt: 2,
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

      {/* Taille et poids */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ color: "#000" }}>
            Taille : {pokemon.height / 10} m
        </Typography>
        <Typography variant="body2" sx={{ color: "#000" }}>
            Poids : {pokemon.weight / 10} kg
        </Typography>
      </Box>

      {/* Bouton moves */}
      <Button
        variant="outlined"       // bouton sans remplissage, juste contour
        sx={{
            mt: 2,
            borderColor: "orange", // couleur du contour
            color: "orange",       // couleur du texte
            "&:hover": {
            borderColor: "darkorange", // couleur du contour au survol
            backgroundColor: "rgba(255,165,0,0.1)", // léger fond au survol si souhaité
            },
        }}
        onClick={handleOpenMoves}
        >
        MOVES
        </Button>

      {/* Pop-up moves */}
    <Dialog
        open={movesOpen}
        onClose={handleCloseMoves}
        fullWidth
        maxWidth="sm"
    >
        <DialogTitle>Moves</DialogTitle>
        <DialogContent>
            <List>
                {pokemon.moves.map((move) => (
                    <ListItem key={move}>{move}</ListItem>
                ))}
            </List>
        </DialogContent>
    </Dialog>
    </Card>
  );
}