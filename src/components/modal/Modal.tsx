import { EModalType } from "../../types/types";
import {
  cart,
  cartAnimation,
  modalProduct,
  modalType,
} from "../../recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { CloseBtn, Container, Content, SubmitBtn } from "./styles";
import PizzaModal from "./modals/PizzaModal";
import CrispyModal from "./modals/CrispyModal";
import BucketModal from "./modals/BucketModal";
import SummaryModal from "./modals/SummaryModal";
import { Image } from "../../styles/generalStyles";
import closeBtnIcon from "../../assets/closeBtn.svg";
// import CartAnimation from '../cart/CartAnimation';
function Modal() {
  const [{ type }, setModalType] = useRecoilState(modalType);
  const mProduct = useRecoilValue(modalProduct);
  const [cartOrders, setCartOrders] = useRecoilState(cart);
  const [cartAnimate, setCartAnimation] = useRecoilState(cartAnimation);
  const generateId = () => Math.random().toString(36).substr(2, 9);
  const closeBtnHandler = () => setModalType({ type: null });

  const addToCartHandle = () => {
    setModalType({ type: null });
    if (type === EModalType.PIZZA) {
      setCartOrders([
        ...cartOrders,
        {
          name: mProduct.name,
          price: mProduct.price,
          id: generateId(),
          type: mProduct.type,
          size: mProduct.size,
          extras: mProduct.extras,
        },
      ]);
      setCartAnimation({
        ...cartAnimate,
        pizza: true,
      });
      setTimeout(() => {
        setCartAnimation({
          ...cartAnimate,
          pizza: false,
        });
      }, 500);
    } else if (type === EModalType.CRISPY || type === EModalType.BURGER) {
      setCartOrders([
        ...cartOrders,
        {
          name: mProduct.name,
          price: mProduct.price,
          id: generateId(),
          type: mProduct.type,
          sauce: mProduct.sauce,
          extras: mProduct.extras,
        },
      ]);
      if (type === EModalType.CRISPY) {
        setCartAnimation({
          ...cartAnimate,
          crispy: true,
        });
        setTimeout(() => {
          setCartAnimation({
            ...cartAnimate,
            crispy: false,
          });
        }, 500);
      } else {
        setCartAnimation({
          ...cartAnimate,
          burger: true,
        });
        setTimeout(() => {
          setCartAnimation({
            ...cartAnimate,
            burger: false,
          });
        }, 500);
      }
    } else {
      setCartOrders([
        ...cartOrders,
        {
          name: mProduct.name,
          price: mProduct.price,
          id: generateId(),
          type: mProduct.type,
          extras: mProduct.extras,
        },
      ]);
      if (type === EModalType.BUCKET) {
        setCartAnimation({
          ...cartAnimate,
          bucket: true,
        });
        setTimeout(() => {
          setCartAnimation({
            ...cartAnimate,
            bucket: false,
          });
        }, 500);
      }
    }
  };

  const renderContent = () => {
    if (type === EModalType.PIZZA) {
      return <PizzaModal />;
    } else if (type === EModalType.CRISPY || type === EModalType.BURGER) {
      return <CrispyModal />;
    } else if (type === EModalType.BUCKET) {
      return <BucketModal />;
    } else {
      return <SummaryModal />;
    }
  };

  const renderSubmit = () => {
    if (type === EModalType.SUMMARY) {
      return;
    } else {
      return (
        <SubmitBtn
          display={
            (mProduct?.size && true) ||
            (mProduct?.sauce && true) ||
            (mProduct?.bucket && true)
          }
          onClick={addToCartHandle}
        >
          ADAUGA IN COS
        </SubmitBtn>
      );
    }
  };

  return (
    <Container
      style={{ paddingTop: type === EModalType.PIZZA ? "10px" : null }}
      display={type !== null}
    >
      <Content>
        <CloseBtn onClick={closeBtnHandler}>
          <Image
            src={closeBtnIcon}
            alt="dropdown icon"
            width={30}
            height={30}
          />
        </CloseBtn>
        {type !== null && renderContent()}
        {renderSubmit()}
      </Content>
    </Container>
  );
}

export default Modal;
