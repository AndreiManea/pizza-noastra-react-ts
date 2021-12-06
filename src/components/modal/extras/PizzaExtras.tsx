import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { modalProduct } from "../../../recoil/recoil";
import { extras } from "../../../data";
import Checkbox from "./Checkbox";
import {
  Container,
  Extra,
  ExtraPrice,
  ExtraTitle,
  Label,
  LabelContainer,
} from "./styles";

function PizzaExtras() {
  const [display, setDisplay] = useState(false);
  const pizzaExtras = extras.filter((extra) => extra.type === "pizza");
  const pizzaExtraSauces = extras.filter(
    (extra) => extra.type === "pizzaSauce"
  );
  const mProduct = useRecoilValue(modalProduct);

  const renderExtras = () =>
    pizzaExtras.map((extra, i) => (
      <Extra style={{ marginTop: i === 0 ? "0" : null }} key={extra.id}>
        <Checkbox
          name={extra.ingredient}
          id={extra.id}
          price={mProduct.size === "MARE" ? extra.priceBig : extra.priceMedium}
        />
        <ExtraTitle>{extra.ingredient}</ExtraTitle>
        <ExtraPrice>
          {mProduct.size === "MARE" ? extra.priceBig : extra.priceMedium} LEI
        </ExtraPrice>
      </Extra>
    ));

  const renderExtraSauces = () =>
    pizzaExtraSauces.map((extra, i) => (
      <Extra style={{ marginTop: i === 0 ? "0" : null }} key={extra.id}>
        <Checkbox
          name={extra.ingredient}
          id={extra.id}
          price={mProduct.size === "MARE" ? extra.priceBig : extra.priceMedium}
        />
        <ExtraTitle>{extra.ingredient}</ExtraTitle>
        <ExtraPrice>
          {mProduct.size === "MARE" ? extra.priceBig : extra.priceMedium} LEI
        </ExtraPrice>
      </Extra>
    ));

  useEffect(() => {
    mProduct.size ? setDisplay(true) : setDisplay(false);
  }, [mProduct.size]);

  return (
    <Container display={display}>
      <LabelContainer display={mProduct.size && true}>
        <Label>ADAUGA SOS</Label>
      </LabelContainer>
      {renderExtraSauces()}
      <LabelContainer
        style={{ marginTop: "15px" }}
        display={mProduct.size && true}
      >
        <Label>ADAUGA TOPPING</Label>
      </LabelContainer>
      {renderExtras()}
    </Container>
  );
}

export default PizzaExtras;
