import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: 'rgb(24, 173, 179)',
      main: 'rgb(8, 125, 129)',
      dark: 'rgb(7, 96, 99)',
      contrastText: '#fcf49b',
    },
    secondary: {
      light: '#f0257a',
      main: '#ad0404',
      dark: '#a71a1a',
      contrastText: '#fcf49b',
    },
      openTitle: '#453a64',
      protectedTitle: '#ad0404',
      type: 'light'
    }
  })

  export default theme
  