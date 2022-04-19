import styled from "styled-components";
import {
  Container,
  Title,
  ProductButton,
  Price,
  Extra,
  ButtonsContainer,
  PhoneButton,
  Image,
} from "../../../styles/generalStyles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAnimation, modalProduct, modalType } from "../../../recoil/recoil";
import { EModalType } from "../../../types/types";
import CartAnimation from "../../cart/CartAnimation";

function Crispy({
  title,
  id,
  imgSrc,
  ingredient1,
  weight1,
  ingredient2,
  weight2,
  price,
  extra,
  type,
  productType,
  bucket,
}) {
  const setModalType = useSetRecoilState(modalType);
  const setModalProduct = useSetRecoilState(modalProduct);
  const cartHandler = () => {
    if (bucket) {
      setModalType({ type: EModalType.BUCKET });
      setModalProduct({
        name: title,
        id,
        extras: [],
        bucket: true,
        price,
        type: "bucket",
      });
    } else {
      setModalType({ type: EModalType.CRISPY });
      setModalProduct({
        name: title,
        id,
        extras: [],
        price,
        type: productType,
      });
    }
  };
  const cartAnimate = useRecoilValue(cartAnimation);
  const renderCartAnimation = () =>
    cartAnimate.bucket ? (
      <CartAnimation type="bucket" />
    ) : (
      <CartAnimation type="crispy" />
    );

  const phoneHandler = () => {
    window.open("tel:0759503346");
  };
  return (
    <Container>
      <Image src={imgSrc} width={125} height={125} />
      <Title>{title}</Title>
      <Ingredient>
        <Weight>{weight1} g</Weight>
        <Item>{ingredient1}</Item>
      </Ingredient>
      <Ingredient>
        <Weight>{weight2} g</Weight>
        <Item>{ingredient2}</Item>
      </Ingredient>
      <Extra>{extra}</Extra>
      <Price big>{price} LEI</Price>
      <ButtonsContainer>
        <ProductButton onClick={cartHandler}>Adauga in cos</ProductButton>
        <PhoneButton onClick={phoneHandler}>Apel Telefonic</PhoneButton>
      </ButtonsContainer>
      {(cartAnimate.crispy || cartAnimate.bucket) && renderCartAnimation()}
    </Container>
  );
}

export default Crispy;

const Ingredient = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: center;
  align-items: center;
`;

const Weight = styled.h4`
  font-size: 16px;
  font-family: "Besley-Bold";
  margin-right: 7px;
  font-weight: bold;

  @media only screen and (min-width: 425px) {
    font-size: 18px;
  }
`;

const Item = styled.h4`
  font-size: 15px;
  font-family: "Besley-New";
  font-weight: 100;
  font-weight: bold;

  @media only screen and (min-width: 425px) {
    font-size: 17px;
  }
`;
