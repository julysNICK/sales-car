import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BelowMenu from '../../components/BelowMenu';
import GalleryCards from '../../components/gallery';
import { Header } from '../../components/Header';
import PopupSale from '../../components/PopupSale';
import SelectorBrandsCars from '../../components/SelectorBrandsCars';
import * as Styled from './styles';
export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/authenticator', { replace: true });
    }
  }, [navigate]);

  return (
    <Styled.Container>
      <Header setShowPopup={setShowPopup} />
      <BelowMenu />
      <SelectorBrandsCars />

      <PopupSale showPopup={showPopup} setShowPopup={setShowPopup} />
    </Styled.Container>
  );
};
