import styled from 'styled-components';
import ProductListItem from './ProductListItem';
import ErrorBanner from './ErrorBanner';

const ProductList = ({ list }) => {
  let productsElements = <ErrorBanner />;
  if (list.length) {
    productsElements = list.map((item) => (
      <ProductListItem key={item.id} {...item} />
    ))
  }
  return (
    <ProductListWrapper>
      {productsElements}
    </ProductListWrapper>
  )
};

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export default ProductList;