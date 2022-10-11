import { products } from '../data/products';
import { useFavoritesDispatch, useFavoritesState } from '../context/FavoritesContext';
import styled from 'styled-components';
import { COLORS, TYPE_SCALE, WEIGHTS } from '../constants/themes';
import { FavoriteFilled, FavoriteOutline } from './Icons';
import { motion } from 'framer-motion';

const ProductBase = ({
  id,
  title,
  price,
  cover,
  favorite,
}) => {

  const dispatch = useFavoritesDispatch();
  const state = useFavoritesState();
  const favorites = state.favorites;

  const handleExistFavorite = (id) => {
    const exist = favorites.some(fav => fav.id === id)
    return exist;
  };

  const handleAddFavorite = (id) => {
    const product = products.find(product => product.id === id)
    if (!handleExistFavorite(id)) {
      const favoriteItem = { ...product, favorite: true };
      dispatch({ type: 'ADD_FAVORITE', payload: { favorite: favoriteItem } })
    }
  };

  const handleRemoveFavorite = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: { id } })
  };

  const renderIcon = favorite
    ? <FavoriteFilled
      modifiers="md"
      primary="primary"
      onClick={() => handleRemoveFavorite(id)}
    />
    : <FavoriteOutline
      modifiers="md"
      primary="primary"
      onClick={() => handleAddFavorite(id)}
    />
  return (
    <BodyWrapper>
      <BodyImage src={cover} alt={title} />
      <ImageOverlay>
        <BodyInfo>
          <InfoTitle>{title}</InfoTitle>
          <InfoPrice>{price} aed</InfoPrice>
        </BodyInfo>
        <BodyIcon>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {renderIcon}
          </motion.div>
        </BodyIcon>
      </ImageOverlay>
    </BodyWrapper>
  )
};

const BodyWrapper = styled.div`
  position: relative;
`;

const BodyImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgb(211 222 220 / 90%);
`;

const BodyInfo = styled.div`
  color: ${COLORS.urgent};
  margin-right: auto;
`;

const InfoTitle = styled.h6`
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.paragraph};
`;

const InfoPrice = styled.h5`
  font-weight: ${WEIGHTS.bold};
  font-size: ${TYPE_SCALE.header5};
  text-transform: uppercase;
`;

const BodyIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${COLORS.white};
  text-align: center;
  background: transparent;
  cursor: pointer;
`;

export default ProductBase;