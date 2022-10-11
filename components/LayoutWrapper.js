import styled from 'styled-components';
import Navigation from './Navigation';
import MainContentWrapper from './MainContentWrapper';
import MaxWidthWrapper from './MaxWidthWrapper';
import { QUERIES } from '../constants/themes';

const LayoutWrapper = ({ children }) => {
  return (
    <MainWrapper>
      <Navigation />
      <MainContentWrapper>
        <MaxWidthWrapper>
          {children}
        </MaxWidthWrapper>
      </MainContentWrapper>
    </MainWrapper>
  )
};

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 80px;
  grid-template-areas: 
    "content"
    "header"
  ;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    grid-template-rows: 80px auto;
    grid-template-areas: 
      "header"
      "content"
    ;
  };

  @media ${QUERIES.laptopAndUp} {
    grid-template-rows: 80px auto;
    grid-template-areas: 
      "header"
      "content"
    ;
  };
`;

export default LayoutWrapper;