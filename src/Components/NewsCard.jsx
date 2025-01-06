import { useAppContext } from "../context/AppContext";
import { Button, Typography, Box } from "@mui/material";
import globalStyles from "../Styles/GlobalStyles"; // Importamos los estilos globales

const NewsCard = ({ article }) => {
  const { addFavorite, removeFavorite, favorites } = useAppContext();
  
  // Verificar si el artículo ya se encuentra en favoritos
  const isFavorite = favorites.some((fav) => fav.id === article.id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(article.id); // Eliminar por id único
    } else {
      addFavorite(article); // Agregar el artículo completo
    }
  };

  return (
    <Box sx={globalStyles.newsCard}>
      {/* Imagen ajustada a un tamaño fijo */}
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{
          width: "50%",
          height: "300px",  
          objectFit: "cover", 
          borderRadius: "8px",
        }}
      />
      <Typography variant="h6" sx={globalStyles.title}>{article.title}</Typography>
      <Typography variant="body2" sx={globalStyles.description}>{article.description}</Typography>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Leer más
      </a>
      <Button sx={globalStyles.button} onClick={handleFavorite}>
        {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
      </Button>
    </Box>
  );
};

export default NewsCard;
