"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/types/pokemon";
import { useLanguage } from "@/context/LanguageContext";
import Loader from "@/components/Loader";



interface TypesJSON {
  [key: string]: {
    backgroundColor: string;
    translations: Record<string, string>;
  };
}

export default function Home() {
  const { language } = useLanguage();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<TypesJSON>({});
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch pokemons et types
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pokemonsRes, typesRes] = await Promise.all([
          fetch("https://pokedex-jgabriele.vercel.app/pokemons.json"),
          fetch("https://pokedex-jgabriele.vercel.app/types.json"),
        ]);
        const pokemonsData: Pokemon[] = await pokemonsRes.json();
        const typesData: TypesJSON = await typesRes.json();
        setPokemons(pokemonsData);
        setTypes(typesData);
      } catch (err) {
        console.error("Erreur fetch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filtrage
  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.names[language]?.toLowerCase().includes(searchText.toLowerCase());
    const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
    return matchesSearch && matchesType;
  });

  if (loading) {
  return (
    <Loader />
  );
}

  return (
    <Box sx={{ p: 2 }}>

      {/* Sélecteur de langue */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
      </Box>

{/* Sélecteur de type à gauche et barre de recherche à droite */}
<Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
  {/* Sélecteur de type */}
  <FormControl sx={{ minWidth: 200 }}>
    <InputLabel>Filtrer par type</InputLabel>
    <Select
      value={selectedType}
      label="Filtrer par type"
      onChange={(e) => setSelectedType(e.target.value)}
    >
      <MenuItem value="">Tous</MenuItem>
      {Object.keys(types).map((typeKey) => (
        <MenuItem key={typeKey} value={typeKey}>
          {types[typeKey].translations[language]}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  {/* Barre de recherche */}
  <TextField
    label="Rechercher un Pokémon"
    variant="outlined"
    value={searchText}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
    sx={{ flex: 1, minWidth: 200 }} // occupe tout l'espace restant
  />
</Box>

      {/* Affichage des cartes */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {filteredPokemons.map((pokemon) => (
          <Box key={pokemon.id} sx={{ width: 250 }}>
            <PokemonCard pokemon={pokemon} types={types} language={language} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}