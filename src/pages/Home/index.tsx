import { useState } from 'react';
import BelowMenu from '../../components/BelowMenu';
import GalleryCards from '../../components/gallery';
import { Header } from '../../components/Header';
import PopupSale from '../../components/PopupSale';
import SelectorBrandsCars from '../../components/SelectorBrandsCars';
import * as Styled from './styles';
export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Styled.Container>
      <Header setShowPopup={setShowPopup} />
      <BelowMenu />
      <SelectorBrandsCars />

      <PopupSale showPopup={showPopup} setShowPopup={setShowPopup} />
    </Styled.Container>
  );
};
