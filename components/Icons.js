import styled from 'styled-components';
import { COLORS, TYPE_SCALE } from '../constants/themes';
import { applyStyleModifiers } from 'styled-components-modifiers';
import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdHomeFilled
} from 'react-icons/md';

const ICON_MODIFIER = {
  sm: () => `
    font-size: ${TYPE_SCALE.header5};
  `,
  md: () => `
    font-size: ${TYPE_SCALE.header3};
  `,
  lg: () => `
    font-size: ${TYPE_SCALE.header1};
  `
}

export const FavoriteFilled = styled(MdOutlineFavorite)`
  color: ${props => props.primary ? COLORS.urgent : COLORS.white};
  font-size: ${TYPE_SCALE.text};

  ${applyStyleModifiers(ICON_MODIFIER)};
`;

export const FavoriteOutline = styled(MdOutlineFavoriteBorder)`
  color: ${props => props.primary ? COLORS.urgent : COLORS.white};

  ${applyStyleModifiers(ICON_MODIFIER)};
`;

export const HomeFilled = styled(MdHomeFilled)`
  color: ${props => props.primary ? COLORS.urgent : COLORS.white};

  ${applyStyleModifiers(ICON_MODIFIER)};
`;
