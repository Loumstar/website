import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Create a theme instance.
export const MaterialTheme = responsiveFontSizes(
  createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff',
      },
      mode: 'light',
      primary: {
        main: '#ff1644',
        light: '#ff4469',
        dark: '#b20f2f',
        contrastText: '#fff',
      },
      secondary: {
        main: '#00b0ff',
        light: '#33bfff',
        dark: '#007bb2',
        contrastText: '#fff',
      },
      info: {
        light: '#fff',
        main: '#fafafa',
        dark: '#9e9e9e',
        contrastText: '#fff',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0,0.47)',
      },
      grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
      text: {
        primary: 'rgba(0, 0, 0,0.57)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: '#fff',
        default: '#fff',
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selectedOpacity: 0.2,
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    typography: {
      fontFamily: `Inter, Helvetica, Arial, sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
      fontWeightBold: 900,
      h1: {
        fontWeight: 900,
        fontSize: 10,
      },
      h2: {
        fontWeight: 900,
        fontSize: 32
      },
      h3: {
        fontWeight: 500,
        fontSize: 22
      },
      body1: {
        fontWeight: 300,
        fontSize: 16
      },
      body2: {
        fontWeight: 300,
        fontSize: 14,
      },
      caption: {
        fontWeight: 300,
        lineHeight: 1.5
      }
    },
    spacing: 8,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  }),
)