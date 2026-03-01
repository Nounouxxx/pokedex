import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // conserve ton mode sombre actuel
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#0f0e0e",
      paper: "#1e1e1e",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#ffffff",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#90caf9",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#90caf9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#90caf9",
            },
            "& input": {
              color: "#ffffff",
            },
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#90caf9",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#90caf9",
          },
          "& .MuiSvgIcon-root": {
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;