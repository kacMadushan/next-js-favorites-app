import { FavoritesProvider } from '../context/FavoritesContext';
import GlobalStyles from '../components/GlobalStyles';
import LayoutWrapper from '../components/LayoutWrapper';

const MyApp = ({ Component, pageProps }) => {
  return (
    <FavoritesProvider>
      <GlobalStyles />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </FavoritesProvider>
  )
};

export default MyApp
