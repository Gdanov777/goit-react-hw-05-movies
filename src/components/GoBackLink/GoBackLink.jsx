import { BsFillReplyAllFill } from 'react-icons/bs';
import { StyledLink } from './GoBackLink.styled';

export const GoBackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsFillReplyAllFill size="24" />
      {children}
    </StyledLink>
  );
};