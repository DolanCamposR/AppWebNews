const globalStyles = {
  // Estilo común para los contenedores
  container: {
    padding: '16px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    // Usamos sx para aplicar estilos responsivos
    sx: {
      padding: {
        xs: '8px', // Pantallas pequeñas
        sm: '16px', // Pantallas medianas y grandes
      },
    },
  },

  // Estilo común para los botones
  button: {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '10px 20px',
    margin: '15px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
    sx: {
      width: { xs: '100%', sm: 'auto' }, // El botón ocupa todo el ancho en pantallas pequeñas
    },
  },

  // Estilo común para las tarjetas de noticias
  newsCard: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    sx: {
      padding: {
        xs: '12px', // Pantallas pequeñas
        sm: '16px', // Pantallas medianas y grandes
      },
      marginBottom: {
        xs: '16px', // Pantallas pequeñas
        sm: '20px', // Pantallas medianas y grandes
      },
    },
  },

  // Estilo de texto para el título
  title: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '12px',
    sx: {
      fontSize: { xs: '20px', sm: '24px' }, // Tamaño de fuente responsivo
    },
  },

  // Estilo del texto para descripción
  description: {
    fontSize: '16px',
    color: '#555',
    sx: {
      fontSize: { xs: '14px', sm: '16px' }, // Tamaño de la fuente responsivo
    },
  },

  // Estilos de inputs
  inputField: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    marginBottom: '12px',
    sx: {
      fontSize: { xs: '14px', sm: '16px' }, // Ajuste del tamaño de fuente
      padding: { xs: '8px', sm: '10px' }, // Ajuste del tamaño de padding
    },
  },

  // Estilo general para los títulos grandes
  pageTitle: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '20px',
    sx: {
      fontSize: { xs: '28px', sm: '32px' }, // Tamaño de fuente responsivo para título
    },
  },

  // Estilo de los contenedores de los elementos con más espacio
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    sx: {
      flexDirection: { xs: 'column', sm: 'row' }, // En pantallas pequeñas, cambia a columna
    },
  },

};

export default globalStyles;
