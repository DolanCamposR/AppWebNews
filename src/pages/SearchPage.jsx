import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import NewsCard from "../Components/NewsCard";
import { Container, Typography, Grid, Paper } from "@mui/material";
import SearchBar from "../Components/SearchBar";

const SearchPage = () => {
  const { filteredArticles } = useAppContext();

  // Asegurarse de que filteredArticles siempre sea un array
  const articlesToShow = filteredArticles || [];

  useEffect(() => {
    // Se podría agregar lógica adicional aquí si es necesario
  }, [filteredArticles]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        height: "100vh", // Asegura que el contenedor ocupe toda la altura de la pantalla
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Asegura que el contenido se distribuye en toda la pantalla
        paddingBottom: 4,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
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
