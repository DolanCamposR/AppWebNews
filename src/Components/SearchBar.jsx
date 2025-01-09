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
        flexDirection: { xs: "column", sm: "row" }, // Asegura que en pantallas pequeñas sea en columna y en pantallas más grandes en fila
        alignItems: "center",
        gap: 2,
        width: "100%", // Asegura que ocupe el 100% del contenedor disponible
        mb: 4,
      }}
    >
      <TextField
        inputRef={inputRef} // Referencia asignada al input
        label="Buscar noticias..."
        variant="outlined"
        fullWidth
        sx={{
          minWidth: 200, // Asegura que el campo de texto tenga un tamaño mínimo
        }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
        sx={{
          width: { xs: "100%", sm: "auto" }, // En pantallas pequeñas el botón ocupará todo el ancho, en pantallas grandes se ajustará al tamaño necesario
        }}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
