import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export interface HeaderProps {
  title?: string;
}

const StyledHeader = styled.header`
  text-align: center;
`;

const Header: React.FC<HeaderProps> = ({
  title,
}) => {
  return (
    <StyledHeader>
      <Typography variant="h1" fontSize={40}>Jedi CRUD App</Typography>
      <Typography variant="h5">{title}</Typography>
    </StyledHeader>
  );
};

export default Header;