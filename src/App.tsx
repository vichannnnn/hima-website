import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Footer, Header, LandingPage, Links } from '@features';
import { MediaQueryProvider } from '@providers';

const customMuiTheme = {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'PatrickHandSC, sans-serif',
          fontSize: '24px',
          backgroundColor: '#fcfbf8',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fcfbf8',
          borderRadius: '24px',
        },
      },
    },
  },
};

export function App() {
  const muiTheme = createTheme(customMuiTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <MediaQueryProvider>
          <Header />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/links' element={<Links />} />
            {/*<Route path='*' element={<NotFound />} />*/}
          </Routes>
          <Footer />
        </MediaQueryProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
