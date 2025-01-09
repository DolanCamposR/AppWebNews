import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const NewsCard = ({ article }) => {
  const { addFavorite, removeFavorite, favorites } = useAppContext();

  // Estado para manejar la visibilidad del modal
  const [openModal, setOpenModal] = useState(false);

  // Verificar si el artículo ya se encuentra en favoritos
  const isFavorite = favorites.some((fav) => fav.id === article.id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(article.id); // Eliminar por id único
    } else {
      addFavorite(article); // Agregar el artículo completo
    }
  };

  // Función para abrir el modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          width: "100%", // Asegura que ocupe todo el ancho disponible
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        {/* Imagen del artículo */}
        {article.urlToImage && (
          <CardMedia
            component="img"
            height="180"
            image={article.urlToImage}
            alt={article.title}
            sx={{
              objectFit: "cover",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          />
        )}

        {/* Contenido del artículo */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 600, lineHeight: 1.4 }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            {article.description || "No hay descripción disponible."}
          </Typography>
        </CardContent>

        {/* Acciones: Botón para abrir modal y agregar a favoritos */}
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 16px 16px 16px",
          }}
        >
          <Button size="small" variant="text" onClick={handleOpenModal}>
            Leer más
          </Button>
          <Button
            size="small"
            variant={isFavorite ? "contained" : "outlined"}
            color="primary"
            onClick={handleFavorite}
          >
            {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          </Button>
        </CardActions>
      </Card>

      {/* Modal con la información completa del artículo */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{article.title}</DialogTitle>
        <DialogContent>
          {/* Mostrar la imagen si está disponible */}
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{
                width: "100%",
                marginBottom: "16px",
                objectFit: "cover",
                height: "200px",
              }}
            />
          )}
          {/* Mostrar el contenido completo o descripción */}
          <Typography variant="body1" paragraph>
            {article.author || "No hay contenido adicional disponible."}<br />
            {article.publishedAt || "No hay contenido adicional disponible."}
          </Typography>
          <Typography variant="body1" paragraph>
            {article.content || "No hay contenido adicional disponible."}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {article.description || "No hay descripción disponible."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cerrar
          </Button>
          <Button
            onClick={() => window.open(article.url, "_blank")}
            color="primary"
            disabled={!article.url}
          >
            Ir a fuente oficial
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewsCard;
