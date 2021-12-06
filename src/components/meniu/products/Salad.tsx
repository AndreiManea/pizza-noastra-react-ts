import { useState } from "react";
import { useRecoilState } from "recoil";
import { cart } from "../../../recoil/recoil";
import {
  Container,
  Title,
  Ingredients,
  Price,
  ProductButton,
  ButtonsContainer,
  PhoneButton,
  Image,
} from "../../../styles/generalStyles";
import CartAnimation from "../../cart/CartAnimation";

function Salad({ title, ingredients, price, type, productType, id }) {
  const [cartOrders, setCartOrders] = useRecoilState(cart);
  const generateId = () => Math.random().toString(36).substr(2, 9);
  const [clicked, setClicked] = useState(false);

  const renderCartAnimation = () => <CartAnimation type="salad" />;

  const cartHandler = () => {
    setCartOrders([
      ...cartOrders,
      {
        name: title,
        price,
        id: generateId(),
        type: productType,
      },
    ]);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500);
  };

  const phoneHandler = () => {
    window.open("tel:0759503346");
  };

  return (
    <Container style={{ marginTop: "10px" }}>
      <Image src="/icons/salata.svg" width={115} height={115} />
      <Title>{title}</Title>
      <Ingredients>{ingredients}</Ingredients>
      <Price style={{ marginTop: "5px" }} big>
        {price} LEI
      </Price>
      <ButtonsContainer>
        <ProductButton onClick={cartHandler}>Adauga in cos</ProductButton>
        <PhoneButton onClick={phoneHandler}>Apel Telefonic</PhoneButton>
      </ButtonsContainer>
      {clicked && renderCartAnimation()}
    </Container>
  );
}

export default Salad;
