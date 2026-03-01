"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Button,
  Modal,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { Pokemon } from "@/types/pokemon";
import { useLanguage } from "@/context/LanguageContext";
import PokemonDetailCard from "@/components/PokemonDetailCard";
import { Navigate } from "react-router-dom";
import Loader from "@/components/Loader";



interface TypesJSON {
  [key: string]: {
    backgroundColor: string;
    translations: Record<string, string>;
  };
}

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [types, setTypes] = useState<TypesJSON>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pokemonsRes, typesRes] = await Promise.all([
          fetch("https://pokedex-jgabriele.vercel.app/pokemons.json"),
          fetch("https://pokedex-jgabriele.vercel.app/types.json"),
        ]);

        const pokemonsData: Pokemon[] = await pokemonsRes.json();
        const typesData: TypesJSON = await typesRes.json();

        const foundPokemon = pokemonsData.find((p) => p.id === Number(id));
        setPokemon(foundPokemon || null);
        setTypes(typesData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Loader />
    );
  }

if (!pokemon) {
  return <Navigate to="/404" replace />;  // ⚠ redirige vers la page NotFound
}

  return (
    <Box sx={{ p: 4 }}>
      {/* Bouton Retour */}
      <Button variant="outlined" onClick={() => navigate("/")}>
          ← Retour
        </Button>

      {/* Détail du Pokémon */}
      <PokemonDetailCard pokemon={pokemon} types={types} language={language} />
    </Box>
  );
}