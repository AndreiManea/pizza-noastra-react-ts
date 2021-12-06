import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { extras } from "../../../data";
import { modalProduct } from "../../../recoil/recoil";
import Checkbox from "./Checkbox";
import {
  Container,
  Extra,
  ExtraPrice,
  ExtraTitle,
  Label,
  LabelContainer,
} from "./styles";

function CrispyExtras() {
  const [display, setDisplay] = useState(false);
  const [crispyExtras, setExtras] = useState(
    extras.filter((extra) => extra.type === "crispy")
  );

  const mProduct = useRecoilValue(modalProduct);
  const findExtra = (extra) => {
    const foundExtra = mProduct.extras.find((ex) => ex.id === extra.id);
    return foundExtra;
  };

  const renderExtras = () =>
    crispyExtras.map((extra, i) => (
      <Extra style={{ marginTop: i === 0 ? "0" : null }} key={extra.id}>
        <Checkbox name={extra.ingredient} id={extra.id} price={extra.price} />
        <ExtraTitle>{extra.ingredient}</ExtraTitle>
        <ExtraPrice>
          {findExtra(extra)
            ? findExtra(extra).price * findExtra(extra).count
            : extra.price}{" "}
          LEI
        </ExtraPrice>
      </Extra>
    ));

  useEffect(() => {
    mProduct.sauce || mProduct.bucket ? setDisplay(true) : setDisplay(false);
  }, [mProduct.sauce]);

  return (
    <Container display={display}>
      <LabelContainer display={mProduct.sauce && true}>
        <Label>ADAUGA EXTRA</Label>
      </LabelContainer>
      {renderExtras()}
    </Container>
  );
}

export default CrispyExtras;
