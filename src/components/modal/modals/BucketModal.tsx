import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { modalProduct } from '../../../recoil/recoil';
import CrispyExtras from '../extras/CrispyExtras';
import { IncludedFries, ProductContainer, ProductTitle } from '../styles';

function BucketModal() {
  const mProduct = useRecoilValue(modalProduct);

  return (
    <ProductContainer>
      <ProductTitle>{mProduct.name}</ProductTitle>
      <NotIncluded>nu include cartofi prajiti sau sos</NotIncluded>
      <CrispyExtras />
    </ProductContainer>
  );
}

const NotIncluded = styled(IncludedFries)`
  text-align: center;
  font-size: 1em;
  line-height: 22px;
`;

export default BucketModal;
