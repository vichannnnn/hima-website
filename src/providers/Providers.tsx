'use client';

import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { MediaQueryProvider } from '@providers/MediaQueryProvider';

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
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // TODO: This is throwing a linting error despite it working correctly and defined properly, need to investigate
  // @ts-ignore
  const muiTheme = createTheme(customMuiTheme);

  return (
    <ThemeProvider theme={muiTheme}>
      <MediaQueryProvider>{children}</MediaQueryProvider>
    </ThemeProvider>
  );
}
