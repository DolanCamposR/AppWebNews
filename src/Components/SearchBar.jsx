import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import globalStyles from "../Styles/GlobalStyles";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { articles, setFilteredArticles } = useAppContext();

  const handleSearch = () => {
    if (query.trim()) {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  };

  return (
    <Box sx={globalStyles.container}>
      {/* Campo de texto para la búsqueda */}
      <TextField
        label="Buscar noticias..."
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={globalStyles.inputField}
      />
      {/* Botón para ejecutar la búsqueda */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        startIcon={<SearchIcon />}
        sx={globalStyles.button}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
