import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'inherit'
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1.1rem',
        },
        h4: {
          fontSize: '2.25rem'
        },
        h6: {
          fontSize: '2rem',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
          display: 'inline-block',
          lineHeight: '1.2',
          padding: '8px 12px',  
          color: 'white',
          fontWeight: '500',
          backgroundColor: 'black',
          fontFamily: 'inherit'
        }
      }
    }
  },
});
