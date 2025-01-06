import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import NewsCard from "../Components/NewsCard";
import SearchBar from "../Components/SearchBar";
import { Box, Typography } from "@mui/material";
import globalStyles from "../Styles/GlobalStyles"; // Importamos los estilos globales

const SearchPage = () => {
  const { articles } = useAppContext();
  const [query, setQuery] = useState("");

  return (
    <Box sx={globalStyles.container}>
      <Typography variant="h4" sx={globalStyles.pageTitle}>
        Buscar Noticias
      </Typography>
      <SearchBar query={query} setQuery={setQuery} />
      <div>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (

          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>-
            No se encontraron resultados para &quot;{query}&quot;.
          </Typography>

        )}
      </div>
    </Box>
  );
};

export default SearchPage;
