import Link from 'next/link';
import { useRouter } from "next/router";
import { MdHomeFilled, MdFavorite } from 'react-icons/md';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';
import { COLORS, WEIGHTS, TYPE_SCALE, QUERIES } from '../constants/themes';

const Navigation = () => {
  const router = useRouter();
  return (
    <MainHeader>
      <NavRow>
        <Link href="/" passHref>
          <LinkItem className={router.pathname == "/" ? "active" : ""}>
            <HomeIcon />
            <LinkLabel>Home</LinkLabel>
          </LinkItem>
        </Link>
        <Link href="/favorites" passHref>
          <LinkItem className={router.pathname == "/favorites" ? "active" : ""}>
            <FavoriteIcon />
            <LinkLabel>Favorites</LinkLabel>
          </LinkItem>
        </Link>
      </NavRow>
    </MainHeader>
  )
};

const MainHeader = styled.header`
  grid-area: header;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${COLORS.primary};
  box-shadow: 0 1px 20px 0 rgb(171 179 194 / 40%);
  z-index: 1000;

  @media ${QUERIES.tabletAndUp} {
    position: sticky;
    top: 0;
  };

  @media ${QUERIES.laptopAndUp} {
    position: sticky;
    top: 0;
  };
`;

const NavRow = styled(MaxWidthWrapper)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${QUERIES.tabletAndUp} {
    justify-content: flex-end;
  };

  @media ${QUERIES.laptopAndUp} {
    justify-content: flex-end;
  };
`;

const LinkItem = styled.a`
  color: ${COLORS.white};
  text-align: center;
  font-weight: ${WEIGHTS.bold};
  display: block;
  padding: 0.75rem 1rem;
  cursor: pointer;

  &:hover {
    color: ${COLORS.urgent};
  }
`;

const HomeIcon = styled(MdHomeFilled)`
  font-size: ${TYPE_SCALE.header1};

  @media ${QUERIES.tabletAndUp} {
    display: none;
  };

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const FavoriteIcon = styled(MdFavorite)`
  font-size: ${TYPE_SCALE.header1};

  @media ${QUERIES.tabletAndUp} {
    display: none;
  };

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const LinkLabel = styled.span`
  display: none;
  text-transform: uppercase;

  @media ${QUERIES.tabletAndUp} {
    display: block;
  };

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;


export default Navigation;