import Header from '@/layouts/comp/Header';
import { HeaderPropsProvider, type HeaderProps } from '@/models/headerContext';
import { Box, Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

// ==============================|| LAYOUT - AUTH ||============================== //

export default function LayoutPage() {
  const [headerProps, setHeaderPropsState] = useState<HeaderProps>({
    pageTitle: '',
    backButton: false,
    closeButton: false,
    fnGoBack: undefined,
  });

  const setHeaderProps = useCallback((props: Partial<HeaderProps>) => {
    setHeaderPropsState((prev) => ({ ...prev, ...props }));
  }, []);

  return (
    <Box className="wrapper">
      <Header headerProps={headerProps} />
      <Container className="container">
        <HeaderPropsProvider value={setHeaderProps}>
          <Outlet />
        </HeaderPropsProvider>
      </Container>
    </Box>
  );
}
