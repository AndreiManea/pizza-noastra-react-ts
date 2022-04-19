import styled from "styled-components";
import {
  Container,
  Title,
  Ingredients,
  Price,
  ProductButton,
  ButtonsContainer,
  PhoneButton,
  Image,
  Props,
} from "../../../styles/generalStyles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAnimation, modalProduct, modalType } from "../../../recoil/recoil";
import { EModalType } from "../../../types/types";
import CartAnimation from "../../cart/CartAnimation";

function Pizza({
  title,
  ingredients,
  mediumGr,
  id,
  largeGr,
  mediumPrice,
  largePrice,
  type,
  productType,
}) {
  const setModalType = useSetRecoilState(modalType);
  const setModalProduct = useSetRecoilState(modalProduct);
  const { pizza } = useRecoilValue(cartAnimation);
  const cartHandler = () => {
    setModalType({ type: EModalType.PIZZA });
    setModalProduct({
      name: title,
      id,
      extras: [],
      mediumPrice,
      largePrice,
      type: productType,
    });
  };

  const phoneHandler = () => {
    window.open("tel:0759503346");
  };

  const renderCartAnimation = () => <CartAnimation type="pizza" />;

  return (
    <Container style={{ marginTop: "10px" }}>
      <Image src="/icons/pizza.svg" width={125} height={125} alt="Pizza" />
      <Title>{title}</Title>
      <Ingredients>{ingredients}</Ingredients>
      <Icons>
        <Icon src="/icons/smallPizza.svg"></Icon>
        <Icon big src="/icons/smallPizza.svg"></Icon>
      </Icons>
      <Sizes>
        <SizeMedium>
          <SizeTitle>MEDIE</SizeTitle>
          <Weight>{mediumGr} g</Weight>
          <Price>{mediumPrice} LEI</Price>
        </SizeMedium>
        <SizeLarge>
          <SizeTitle>MARE</SizeTitle>
          <Weight>{largeGr} g</Weight>
          <Price>{largePrice} LEI</Price>
        </SizeLarge>
      </Sizes>
      <ButtonsContainer>
        <ProductButton onClick={cartHandler}>Adauga in cos</ProductButton>
        <PhoneButton onClick={phoneHandler}>Apel Telefonic</PhoneButton>
      </ButtonsContainer>
      {pizza && renderCartAnimation()}
    </Container>
  );
}

export default Pizza;

const Sizes = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  height: 60px;

  @media only screen and (min-width: 425px) {
    width: 75%;
  }

  @media only screen and (min-width: 768px) {
    width: 65%;
  }

  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const SizeTitle = styled.h5`
  font-size: 12px;
  font-family: "Astron";
  font-weight: 100;
  letter-spacing: 1px;

  @media screen and (min-width: 425px) {
    font-size: 14px;
  }
`;

const SizeMedium = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  padding: 10px 0px 15px 0px;
  margin-bottom: 4px;

  @media screen and (min-width: 425px) {
    width: 80%;
  }

  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`;

const SizeLarge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: ${(props: Props) => (props.big ? "40px" : "30px")};
  height: ${(props: Props) => (props.big ? "40px" : "30px")};

  @media only screen and (min-width: 425px) {
    width: ${(props: Props) => (props.big ? "50px" : "35px")};
    height: ${(props: Props) => (props.big ? "50px" : "35px")};
  }
`;

const Weight = styled.h4`
  color: white;
  font-size: 11px;
  font-family: "Astron";
  letter-spacing: 1px;
  font-weight: 100;

  @media screen and (min-width: 425px) {
    font-size: 13px;
  }
`;
