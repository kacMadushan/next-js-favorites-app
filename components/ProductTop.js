import Avatar from './Avatar';
import styled from 'styled-components';
import { COLORS, WEIGHTS, TYPE_SCALE } from '../constants/themes';

const ProductTop = ({ avatar, name }) => {
  return (
    <HeaderWrapper>
      <Avatar modifiers={["sm", "circle"]} src={avatar} alt={name} />
      <UserName>{name}</UserName>
    </HeaderWrapper>
  )
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
`;

const UserName = styled.h6`
  color: ${COLORS.urgent};
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.paragraph};
  margin-left: 0.75rem;
`;

export default ProductTop;