import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { modalProduct } from "../../../recoil/recoil";
import PizzaButtons from "../buttons/PizzaButtons";
import PizzaExtras from "../extras/PizzaExtras";
import {
  Label,
  LabelContainer,
  ProductContainer,
  ProductTitle,
} from "../styles";

function PizzaModal() {
  const mProduct = useRecoilValue(modalProduct);

  return (
    <PizzaContainer>
      <ProductTitle>{mProduct.name}</ProductTitle>
      <LabelContainer>
        <Label>ALEGE MARIMEA *</Label>
      </LabelContainer>
      <PizzaButtons />
      <PizzaExtras />
    </PizzaContainer>
  );
}

const PizzaContainer = styled(ProductContainer)`
  padding-left: 5px;
  width: 80vw;
  min-height: 68vh;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    min-height: 70vh;
  }
`;

export default PizzaModal;
