import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { modalProduct } from '../../../recoil/recoil';
import { Buton, ButtonsContainer } from './styles';
function PizzaButtons() {
  const [size, setSize] = useState({ medium: false, big: false });
  const [mProduct, setModalProduct] = useRecoilState(modalProduct);
  const sizeHandler = sizeStr => {
    switch (sizeStr) {
      case 'MEDIE':
        setSize({ ...size, medium: !size.medium, big: false });
        if (mProduct.size !== 'MEDIE') {
          setModalProduct({
            ...mProduct,
            size: 'MEDIE',
            price: mProduct.mediumPrice
          });
        } else {
          setModalProduct({ ...mProduct, size: '' });
        }
        break;
      case 'MARE':
        setSize({ ...size, medium: false, big: !size.big });
        if (mProduct.size !== 'MARE') {
          setModalProduct({
            ...mProduct,
            size: 'MARE',
            price: mProduct.largePrice
          });
        } else {
          setModalProduct({ ...mProduct, size: '' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <PizzaSizes>
      <PizzaSize active={size.medium} onClick={() => sizeHandler('MEDIE')}>
        MEDIE
      </PizzaSize>
      <PizzaSize active={size.big} onClick={() => sizeHandler('MARE')}>
        MARE
      </PizzaSize>
    </PizzaSizes>
  );
}

const PizzaSizes = styled(ButtonsContainer)``;
const PizzaSize = styled(Buton)`
  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;

export default PizzaButtons;
