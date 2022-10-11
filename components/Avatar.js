import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const AVATAR_MODIFIER = {
  sm: () => `
    width: 48px;
    height: 48px;
  `,
  md: () => `
    width: 64px;
    height: 64px
  `,
  lg: () => `
    width: 124px;
    height: 124px;
  `,
  circle: () => `
    border-radius: 50%; 
  `,
  radius: () => `
    border-radius: 3px;
  `,
};

const Avatar = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  ${applyStyleModifiers(AVATAR_MODIFIER)}
`;

export default Avatar;