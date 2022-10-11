import styled from 'styled-components';
import { COLORS } from '../constants/themes';
import ProductTop from './ProductTop';
import ProductBase from './ProductBase';
import ProductBottom from './ProductBottom';

const ProductListItem = ({
  id,
  title,
  price,
  avatar,
  username,
  image,
  favorite,
  description,
  likes,
  tags,
  comments,
}) => {
  return (
    <ProductItemWrapper>
      <ProductTop
        avatar={avatar}
        name={username}
      />
      <ProductBase
        id={id}
        title={title}
        price={price}
        cover={image}
        favorite={favorite}
      />
      <ProductBottom
        description={description}
        comments={comments}
        likes={likes}
        tags={tags}
      />
    </ProductItemWrapper>
  )
};

const ProductItemWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid ${COLORS.gray[200]};
  box-shadow: 0 0 10px 1px rgb(220 220 220 / 40%);
`;

export default ProductListItem;