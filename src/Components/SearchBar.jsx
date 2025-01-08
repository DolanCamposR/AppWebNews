import { useRef } from "react";
import { useAppContext } from "../context/AppContext";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const inputRef = useRef(); // Referencia al input
  const { searchArticles } = useAppContext(); // Acceso a la función de búsqueda

  const handleSearch = () => {
    const query = inputRef.current?.value.trim(); // Captura el valor del input
    searchArticles(query); // Realiza la búsqueda
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 4,
      }}
    >
      <TextField
        inputRef={inputRef} // Referencia asignada al input
        label="Buscar noticias..."
        variant="outlined"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
