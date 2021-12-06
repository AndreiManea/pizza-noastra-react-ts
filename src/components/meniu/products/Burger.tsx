import {
  Container,
  Title,
  Ingredients,
  Price,
  Extra,
  ButtonsContainer,
  ProductButton,
  PhoneButton,
  Image,
} from "../../../styles/generalStyles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAnimation, modalProduct, modalType } from "../../../recoil/recoil";
import { EModalType } from "../../../types/types";
import CartAnimation from "../../cart/CartAnimation";

function Burger({ title, ingredients, price, id, type, productType }) {
  const setModalType = useSetRecoilState(modalType);
  const setModalProduct = useSetRecoilState(modalProduct);
  const { burger } = useRecoilValue(cartAnimation);
  const cartHandler = () => {
    setModalType({ type: EModalType.BURGER });
    setModalProduct({ name: title, id, extras: [], price, type: productType });
  };

  const phoneHandler = () => {
    window.open("tel:0759503346");
  };
  const renderCartAnimation = () => <CartAnimation type="burger" />;

  return (
    <Container>
      <Image src="/icons/burger.svg" width={125} height={125} />
      <Title>{title}</Title>
      <Ingredients large>{ingredients}</Ingredients>
      <Extra>Include sos si cartofi prajiti</Extra>
      <Price big>{price} LEI</Price>
      <ButtonsContainer>
        <ProductButton onClick={cartHandler}>Adauga in cos</ProductButton>
        <PhoneButton onClick={phoneHandler}>Apel Telefonic</PhoneButton>
      </ButtonsContainer>
      {burger && renderCartAnimation()}
    </Container>
  );
}
export default Burger;
