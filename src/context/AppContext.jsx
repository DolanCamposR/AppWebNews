import { createContext, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Crear contexto
const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") || "light";

  const [user, setUser] = useState({ name: "Invitado", theme: savedTheme });
  const [favorites, setFavorites] = useState([]);
  const [settings, setSettings] = useState({ country: "us", category: "general" });
  const [articles, setArticles] = useState([]); // Todas las noticias
  const [filteredArticles, setFilteredArticles] = useState([]); // Noticias filtradas
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 5; // Noticias por página
  const API_KEY = "58e650c64d1d4722854cdc25ef5572e3";

  // Alternar tema claro/oscuro
  const toggleTheme = () => {
    const newTheme = user.theme === "light" ? "dark" : "light";
    setUser((prev) => ({
      ...prev,
      theme: newTheme,
    }));
    localStorage.setItem("theme", newTheme); // Guardar el tema en localStorage
  };

  // Agregar/quitar favoritos
  const addFavorite = (newsItem) => {
    const favoriteWithId = { ...newsItem, id: newsItem.url }; // Usamos el `url` como id único
    setFavorites((prev) => [...prev, favoriteWithId]);
  };

  const removeFavorite = (newsId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== newsId));
  };

  // Función para cargar noticias
  const fetchArticles = async (page = 1, query = "") => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${settings.country}&category=${settings.category}&page=${page}&pageSize=${articlesPerPage}&apiKey=${API_KEY}${
        query ? `&q=${query}` : ""
      }`;

      console.log("Fetching articles from:", url);

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

      const data = await response.json();
      console.log("Fetched data:", data);

      setArticles(data.articles || []);
      setFilteredArticles(data.articles || []);
      setTotalPages(Math.ceil(data.totalResults / articlesPerPage));
    } catch (error) {
      console.error("Error al cargar noticias:", error.message);
      setArticles([]);
      setFilteredArticles([]);
    }
  };

  // Función para buscar artículos usando la API
  const searchArticles = (query) => {
    setCurrentPage(1); // Reinicia a la primera página para nuevas búsquedas
    fetchArticles(1, query); // Llama a fetchArticles con la consulta
  };

  // Recargar noticias al cambiar página o configuraciones
  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage, settings]);

  // Crear el tema según el estado 'theme'
  const theme = createTheme({
    palette: {
      mode: user.theme, // Cambia entre 'light' y 'dark' según el estado
    },
  });

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        favorites,
        addFavorite,
        removeFavorite,
        settings,
        setSettings,
        toggleTheme,
        articles,
        filteredArticles,
        searchArticles, // Función de búsqueda
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAppContext = () => useContext(AppContext);
