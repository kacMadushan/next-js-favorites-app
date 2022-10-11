import styled from 'styled-components';
import { COLORS, WEIGHTS, TYPE_SCALE } from '../constants/themes';

const PageTitle = ({ title }) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  )
};

const TitleWrapper = styled.div`
  padding: 0.75rem 0;
  margin-top: 1.125rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${COLORS.gray[200]};
`;

const Title = styled.h3`
  color: ${COLORS.urgent};
  font-weight: ${WEIGHTS.bold};
  font-size: ${TYPE_SCALE.header3};
  text-transform: uppercase;
`;

export default PageTitle;