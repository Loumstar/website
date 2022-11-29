import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    utils: {
      debug: {
        border: string
      }
    }
  }
  interface Palette {
    user: {
      admin: string
      teacher: string
    }
  }
  interface PaletteOptions {
    user: {
      admin: string
      teacher: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    utils: {
      debug: {
        border: string
      }
    }
  }
}

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
        main: '#0099c4',
        light: '#1ba9d1',
        dark: '#007393',
        contrastText: '#fff',
      },
      secondary: {
        main: 'rgb(224,89,115)',
        light: 'rgb(222, 144, 159)',
        dark: 'rgb(219, 26, 65)',
        contrastText: 'rgba(0, 0, 0,0.27)',
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
      user: {
        admin: '#ffb0b0',
        teacher: '#ffd8b0',
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
        fontSize: 24
      },
      h3: {
        fontWeight: 500,
      },
      body1: {
        fontWeight: 300,
        fontSize: 18
      },
      body2: {
        fontWeight: 300,
        fontSize: 18
      }
    },
    spacing: 8,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {},
    utils: {
      debug: {
        border: '1px solid red',
      },
    },
  }),
)