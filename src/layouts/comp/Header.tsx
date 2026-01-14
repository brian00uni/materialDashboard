import type { HeaderProps } from '@/models/headerContext';
import { useLocation, useNavigate } from 'react-router-dom';

type HeaderLayoutProps = {
  headerProps?: HeaderProps;
};

export default function Header({ headerProps }: HeaderLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const mergedProps = {
    pageTitle: '',
    backButton: false,
    closeButton: false,
    fnGoBack: undefined as HeaderProps['fnGoBack'],
    ...headerProps,
  };

  const close = () => {
    if (location.pathname === '/') {
      return;
    }
    navigate('/');
  };

  const goBack = () => {
    if (mergedProps.fnGoBack) {
      mergedProps.fnGoBack();
      return;
    }
    if (location.pathname === '/') {
      close();
      return;
    }
    navigate(-1);
  };

  return (
    <div className="header">
      {mergedProps.backButton ? (
        <button type="button" className="btn-back" onClick={goBack}>
          <span className="hidden">Back</span>
        </button>
      ) : null}

      <h1>{mergedProps.pageTitle}</h1>

      {mergedProps.closeButton ? (
        <button type="button" className="btn-close" onClick={close}>
          <span className="hidden">Close</span>
        </button>
      ) : null}
    </div>
  );
}
