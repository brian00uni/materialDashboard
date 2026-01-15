import { createTheme } from '@mui/material/styles';

// MUI Theme 설정
const theme = createTheme({
  palette: {
    mode: 'light', // 'dark'로 변경 가능
    primary: {
      main: '#1976d2', // 기본 파란색
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0', // 보라색
    },
    error: {
      main: '#f44336',
    },
    background: {
      // default: '#f5f5f5',
      // paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', // 대문자 변환 방지
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
  },
});

export default theme;
