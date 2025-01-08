import { useAppContext } from "../context/AppContext";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";

const NewsPage = () => {
  const { articles, currentPage, setCurrentPage, totalPages } = useAppContext();

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Noticias
      </Typography>

      {/* Lista de noticias */}
      {articles.map((article, index) => (
        <Card
          key={index}
          sx={{
            mb: 2,
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
              }}
            >
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.description}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* Controles de paginación */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            padding: "10px 20px",
          }}
        >
          Anterior
        </Button>
        <Button
          variant="contained"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            padding: "10px 20px",
          }}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default NewsPage;
