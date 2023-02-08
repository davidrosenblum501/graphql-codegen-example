import { Container } from '@mui/material';
import Header from './Header';

export interface AppLayoutProps {
  title?: string;
}

const AppLayout: React.FC<React.PropsWithChildren<AppLayoutProps>> = ({
  children,
  title,
}) => {
  return (
    <Container>
      <Header title={title} />
      <main>
        {children}
      </main>
    </Container>
  );
};

export default AppLayout;