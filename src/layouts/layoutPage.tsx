import Header from '@/layouts/comp/Header';
import { HeaderPropsProvider, type HeaderProps } from '@/models/headerContext';
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
    <div className="app">
      <Header headerProps={headerProps} />
      <main className="content">
        <HeaderPropsProvider value={setHeaderProps}>
          <Outlet />
        </HeaderPropsProvider>
      </main>
    </div>
  );
}
