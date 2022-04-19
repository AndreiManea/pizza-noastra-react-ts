import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { modalProduct } from '../../../recoil/recoil';
import { Buton, ButtonsContainer } from './styles';
function CrispyButtons() {
  const [sauce, setSauce] = useState({
    greens: false,
    mayo: false,
    hot: false
  });
  const [mProduct, setModalProduct] = useRecoilState(modalProduct);

  const sauceHandler = sauceStr => {
    switch (sauceStr) {
      case 'VERDETURI':
        setSauce({ ...sauce, greens: !sauce.greens, mayo: false, hot: false });
        if (mProduct.sauce !== 'VERDETURI') {
          setModalProduct({ ...mProduct, sauce: 'VERDETURI' });
        } else {
          setModalProduct({ ...mProduct, sauce: '' });
        }
        break;
      case 'USTUROI':
        setSauce({ ...sauce, greens: false, mayo: !sauce.mayo, hot: false });
        if (mProduct.sauce !== 'USTUROI') {
          setModalProduct({ ...mProduct, sauce: 'USTUROI' });
        } else {
          setModalProduct({ ...mProduct, sauce: '' });
        }
        break;
      case 'PICANT':
        setSauce({ ...sauce, greens: false, mayo: false, hot: !sauce.hot });
        if (mProduct.sauce !== 'PICANT') {
          setModalProduct({ ...mProduct, sauce: 'PICANT' });
        } else {
          setModalProduct({ ...mProduct, sauce: '' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <CrispySauces>
      <CrispySauce
        active={sauce.greens}
        onClick={() => sauceHandler('VERDETURI')}
      >
        VERDETURI
      </CrispySauce>
      <CrispySauce active={sauce.mayo} onClick={() => sauceHandler('USTUROI')}>
        USTUROI
      </CrispySauce>
      <CrispySauce active={sauce.hot} onClick={() => sauceHandler('PICANT')}>
        PICANT
      </CrispySauce>
    </CrispySauces>
  );
}

const CrispySauces = styled(ButtonsContainer)``;
const CrispySauce = styled(Buton)`
  margin-left: 10px;
  width: 37%;
  font-size: 0.5em;
  @media screen and (min-width: 425px) {
    font-size: 0.6em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 0.8em;
  }
`;

export default CrispyButtons;
