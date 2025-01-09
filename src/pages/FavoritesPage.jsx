import { useAppContext } from "../context/AppContext";
import NewsCard from "../Components/NewsCard";
import {Typography, Grid, Paper, Button, Box } from "@mui/material";

const FavoritesPage = () => {
  const { favorites } = useAppContext();

  return (
    <Box
      sx={{
        width: "100%", // Asegura que el Box ocupe todo el ancho disponible
        height: "100vh", // Asegura que ocupe toda la altura de la pantalla
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distribuye el contenido entre el principio y final
        gap: 3,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Favoritos
      </Typography>

      {/* Si tiene favoritos */}
      <Box sx={{ flexGrow: 1 }}>
        {favorites.length > 0 ? (
          <Grid container spacing={3}>
            {favorites.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
      </Box>
    </Box>
  );
};

export default FavoritesPage;
