import BelowMenu from '../../components/BelowMenu';
import GalleryCards from '../../components/gallery';
import { Header } from '../../components/Header';
import SelectorBrandsCars from '../../components/SelectorBrandsCars';
import * as Styled from './styles';
export const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <BelowMenu />
      <SelectorBrandsCars />
      <GalleryCards />
    </Styled.Container>
  );
};
