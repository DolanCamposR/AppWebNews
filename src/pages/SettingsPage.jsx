import { useAppContext } from "../context/AppContext";
import { Box, Typography, TextField, MenuItem, Select, Button } from "@mui/material";
import globalStyles from "../Styles/GlobalStyles"; // Importamos los estilos globales

const SettingsPage = () => {
  const { user, setUser, settings, setSettings, toggleTheme } = useAppContext();

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleCountryChange = (e) => {
    setSettings({ ...settings, country: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setSettings({ ...settings, category: e.target.value });
  };

  return (
    <Box sx={globalStyles.container}>
      <Typography variant="h4" sx={globalStyles.pageTitle}>
        Configuración
      </Typography>

      <div>
        <Typography variant="body1">Nombre de usuario:</Typography>
        <TextField
          value={user.name}
          onChange={handleNameChange}
          placeholder="Ingresa tu nombre"
          fullWidth
          sx={globalStyles.inputField}
        />
      </div>

      <div>
        <Typography variant="body1">País:</Typography>
        <Select
          value={settings.country}
          onChange={handleCountryChange}
          fullWidth
          sx={globalStyles.inputField}
        >
          <MenuItem value="us">Estados Unidos</MenuItem>
          <MenuItem value="mx">México</MenuItem>
          <MenuItem value="ar">Argentina</MenuItem>
          <MenuItem value="cl">Chile</MenuItem>
        </Select>
      </div>

      <div>
        <Typography variant="body1">Categoría:</Typography>
        <Select
          value={settings.category}
          onChange={handleCategoryChange}
          fullWidth
          sx={globalStyles.inputField}
        >
          <MenuItem value="general">General</MenuItem>
          <MenuItem value="technology">Tecnología</MenuItem>
          <MenuItem value="sports">Deportes</MenuItem>
          <MenuItem value="health">Salud</MenuItem>
          <MenuItem value="business">Negocios</MenuItem>
        </Select>
      </div>

      <div>
        <Button onClick={toggleTheme} sx={globalStyles.button}>
          Cambiar a {user.theme === "light" ? "Tema Oscuro" : "Tema Claro"}
        </Button>
      </div>
    </Box>
  );
};

export default SettingsPage;
