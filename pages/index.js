import { products } from '../data/products';
import PageTitle from '../components/PageTitle';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <>
      <PageTitle title="Products" />
      <ProductList list={products} />
    </>
  )
};

export default Home;