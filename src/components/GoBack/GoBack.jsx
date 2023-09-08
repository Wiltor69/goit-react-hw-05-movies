import { StyledLink } from './GoBack.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
export const GoBack = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
