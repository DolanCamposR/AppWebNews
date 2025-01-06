import { useAppContext } from "../context/AppContext";
import NewsCard from "../Components/NewsCard";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";

const FavoritesPage = () => {
  const { favorites } = useAppContext();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Favoritos
      </Typography>

      {/* Si tiene favoritos */}
      {favorites.length > 0 ? (
        <Grid container spacing={3}>
          {favorites.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            No tienes noticias favoritas aún.
          </Typography>
          <Button variant="contained" color="primary" href="/" sx={{ mt: 2 }}>
            Volver a la página principal
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default FavoritesPage;
