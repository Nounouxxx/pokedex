"use client";

import React from "react";
import { Box } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        mt: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <img
        src="/simple_pokeball.gif"
        alt="Chargement..."
      />
    </Box>
  );
}