import { createTheme } from '@mui/material/styles';

const theme = window.Telegram.WebApp.themeParams;

const themeMui = createTheme({
  palette: {
    secondary: {
      main: theme.text_color,
    },
    background: {
      default: theme.background,
    },
  },
  typography: {
    fontFamily: theme.fontFamily,
    h4: {
      color: theme.text_color
    }
  },
});

export default themeMui;

