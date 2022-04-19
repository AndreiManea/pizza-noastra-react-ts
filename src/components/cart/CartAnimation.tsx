import styled from "styled-components";
import { Image } from "../../styles/generalStyles";

function CartAnimation({ type }) {
  const renderImage = (type) => {
    switch (type) {
      case "pizza":
        return <Image src="/icons/pizza.svg" width={30} height={30} />;
      case "crispy":
        return <Image src="/icons/crispy.svg" width={30} height={30} />;
      case "bucket":
        return <Image src="/icons/bucket.svg" width={30} height={30} />;
      case "burger":
        return <Image src="/icons/burger.svg" width={30} height={30} />;
      case "salad":
        return <Image src="/icons/salata.svg" width={30} height={30} />;
      default:
        break;
    }
  };

  return <CartImageContainer>{renderImage(type)}</CartImageContainer>;
}

export default CartAnimation;

const CartImageContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 30vh;
  margin-left: auto;
  margin-right: auto;
  width: 0;
  animation: moveToCart 0.5s ease-in-out;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @keyframes moveToCart {
    0% {
      width: 30px;
      top: 30vh;
      left: 0;
    }
    100% {
      width: 0;
      top: 20px;
      left: 50vw;
    }
  }
`;
