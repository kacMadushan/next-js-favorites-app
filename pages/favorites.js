import { useFavoritesState } from '../context/FavoritesContext';
import PageTitle from '../components/PageTitle';
import ProductList from '../components/ProductList';

const Favorites = () => {
  const state = useFavoritesState();
  const favorites = state.favorites;
  return (
    <>
      <PageTitle title="Favorites" />
      <ProductList list={favorites} />
    </>
  )
};

export default Favorites;