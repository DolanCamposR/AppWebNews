import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import NewsCard from "../Components/NewsCard"; 
import { Container, Typography, Grid, Paper} from "@mui/material";
import SearchBar from "../Components/SearchBar"; 

const SearchPage = () => {
  const { filteredArticles} = useAppContext();

  // Asegurarse de que filteredArticles siempre sea un array
  const articlesToShow = filteredArticles || [];

  useEffect(() => {
    //cargar artículos al iniciar la página si no hay filtros
    if (!filteredArticles.length) {
      // defecto
    }
  }, [filteredArticles]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Buscar Noticias
      </Typography>

      {/* Search Bar */}
      <SearchBar />

      {/* Mostrar Noticias */}
      {articlesToShow.length > 0 ? (
        <Grid container spacing={3}>
          {articlesToShow.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.id || index}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            No se encontraron noticias.
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default SearchPage;
