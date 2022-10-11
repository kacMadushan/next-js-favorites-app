import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { COLORS, TYPE_SCALE, FAMILIES } from '../constants/themes';

export const BUTTON_MODIFIERS = {
  small: () => `
    padding: .25rem .5rem;
    font-size: ${TYPE_SCALE.helperText};
  `,
  large: () => `
    padding: .75rem 1rem;
    font-size: ${TYPE_SCALE.paragraph};
  `,
  block: () => `
    display: block;
    width: 100%;
  `,
  activeClass: () => `
    background-color: ${COLORS.primary};
    border: 1px solid ${COLORS.primary};
    color: ${COLORS.urgent};
  `,
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${FAMILIES.sansSerif};
  font-size: ${TYPE_SCALE.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

// export const PrimaryButton = styled(Button)``;