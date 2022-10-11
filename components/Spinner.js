import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import { COLORS } from '../constants/themes';

const override = {
  borderColor: `${COLORS.secondary}`,
};

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader
        unitsize={"px"}
        size={80}
        loading={true}
        cssOverride={override}
      />
    </SpinnerWrapper>
  )
};

const SpinnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
`;

export default Spinner;