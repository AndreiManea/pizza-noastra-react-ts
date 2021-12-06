import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { modalProduct } from "../../../recoil/recoil";
import CrispyButtons from "../buttons/CrispyButtons";
import CrispyExtras from "../extras/CrispyExtras";
import {
  IncludedFries,
  Label,
  LabelContainer,
  ProductContainer,
  ProductTitle,
} from "../styles";

function CrispyModal() {
  const mProduct = useRecoilValue(modalProduct);

  return (
    <CrispyContainer>
      <ProductTitle>{mProduct.name}</ProductTitle>
      <LabelContainer>
        <Label>ALEGE SOS *</Label>
      </LabelContainer>
      <CrispyButtons />
      <IncludedFries>CARTOFI PRAJITI INCLUSI</IncludedFries>
      <CrispyExtras />
    </CrispyContainer>
  );
}

const CrispyContainer = styled(ProductContainer)`
  width: 80vw;
  min-height: 40vh;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export default CrispyModal;
