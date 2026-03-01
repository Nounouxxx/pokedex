"use client";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Langue</InputLabel>
        <Select
            value={language}
            label="Langue"
            onChange={(e) => setLanguage(e.target.value)}
        >
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="it">Italiano</MenuItem>
            <MenuItem value="ja">日本語</MenuItem>
            <MenuItem value="ko">한국어</MenuItem>
            <MenuItem value="zh-Hans">中文 (简体)</MenuItem>
            <MenuItem value="zh-Hant">中文 (繁體)</MenuItem>
      </Select>
    </FormControl>
  );
}