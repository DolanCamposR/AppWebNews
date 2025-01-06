import { useAppContext } from "../context/AppContext";
import globalStyles from "../Styles/GlobalStyles"; // Importamos los estilos globales
import { Box, Button, Typography } from "@mui/material";

const NewsPage = () => {
  const { articles, currentPage, setCurrentPage, totalPages } = useAppContext();

  return (
    <Box sx={globalStyles.container}>
      <Typography variant="h4" sx={globalStyles.pageTitle}>
        Noticias
      </Typography>
      <div>
        {articles.map((article, index) => (
          <Box key={index} sx={globalStyles.newsCard}>
            <Typography variant="h6" sx={globalStyles.title}>
              {article.title}
            </Typography>
            <Typography sx={globalStyles.description}>{article.description}</Typography>
          </Box>
        ))}
      </div>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          sx={globalStyles.button}
        >
          Anterior
        </Button>
        <Button
          variant="contained"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          sx={globalStyles.button}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default NewsPage;
