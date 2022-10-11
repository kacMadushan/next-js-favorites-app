import styled from 'styled-components';
import { COLORS, WEIGHTS, TYPE_SCALE, QUERIES } from '../constants/themes';

const ErrorBanner = () => {
  return (
    <BannerWrapper>
      <BannerTitle>Sorry! No Result Found</BannerTitle>
      <BannerText>We're sorry what you were looking for. Please try another Way</BannerText>
    </BannerWrapper>
  )
};

const BannerWrapper = styled.div`
  display: block;
  text-align: center;
  padding: 1rem;
`;

const BannerTitle = styled.h1`
  color: ${COLORS.urgent};
  font-weight: ${WEIGHTS.bold};
  font-size: ${TYPE_SCALE.header3};
  margin-bottom: 1rem;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${TYPE_SCALE.header1};
  }
`;

const BannerText = styled.p`
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.bold};
  font-size: ${TYPE_SCALE.paragraph};
`;

export default ErrorBanner;