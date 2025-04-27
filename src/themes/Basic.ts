import { createTheme } from '@mui/material';


// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
//   typography: {
//     fontFamily: 'Inter, sans-serif',
//     fontSize: 14,
//     fontWeightRegular: 400,
//     fontWeightBold: 700
// },
//      spacing: 8,
//     }
// );

export const theme = createTheme({
    palette: {
      // Define el color primario usando un tono de turquesa
      primary: {
        main: '#40E0D0', // Un tono común de turquesa
        light: '#64EDE0', // Un tono más claro para estados hover/focus
        dark: '#2C9C91',  // Un tono más oscuro para estados activos/presionados
        contrastText: '#000', // Color del texto que contraste bien con el primario (negro o blanco)
      },
      // Opcional: Define un color secundario que combine bien con el turquesa
      secondary: {
        main: '#FFC107', // Un amarillo/ámbar puede contrastar bien
        light: '#FFD54F',
        dark: '#FFA000',
        contrastText: '#000',
      },
      // Puedes añadir otros colores si lo necesitas (error, warning, info, success)
      // error: {
      //   main: '#f44336',
      // },
      // warning: {
      //   main: '#ff9800',
      // },
      // info: {
      //   main: '#2196f3',
      // },
      // success: {
      //   main: '#4caf50',
      // },
    },
    // Puedes personalizar otras cosas como tipografía, espaciado, componentes, etc.
    typography: {
      fontFamily: 'Inter, sans-serif',
      fontSize: 15,
      fontWeightRegular: 400,
      fontWeightBold: 700
    },
    // spacing: 8, // Espaciado base (por defecto es 8px)
    // components: {
    //   // Sobrescribe estilos de componentes específicos si es necesario
    //   MuiButton: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: 8, // Botones con bordes más redondeados
    //       },
    //     },
    //   },
    // },
  });