import styled from "styled-components";

export interface Props {
  large?: boolean;
  big?: boolean;
  margin?: boolean;
  lessMargin?: boolean;
  display?: boolean;
  animate?: boolean;
  center?: boolean;
  align?: boolean;
  active?: boolean;
  width?: number;
  height?: number;
  navbar?: boolean;
  open?: boolean;
}

//PRODUCTS
export const Container = styled.div`
  height: 80vh;
  background: rgba(0, 0, 0, 0.3);
  width: 90%;
  position: relative;
  margin-bottom: 20px;
  padding: 10px 15px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;

  @media only screen and (min-width: 425px) {
    width: 80%;
  }

  @media only screen and (min-width: 768px) {
    flex: 0.45;
  }

  @media only screen and (min-width: 1024px) {
    height: 90vh;
  }
`;

export const Title = styled.h2`
  font-family: "Astron";
  font-size: 16px;
  color: #fcb271;
  letter-spacing: 1px;
  line-height: 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  @media only screen and (min-width: 425px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 23px;
  }
`;

export const Ingredients = styled.div`
  width: 210px;
  font-size: 13px;
  text-align: center;
  font-family: "Besley-New";
  margin-bottom: 10px;

  @media only screen and (min-width: 425px) {
    font-size: 15px;
    width: 240px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 18px;
    width: ${(props: Props) => (props.large ? "290px" : "270px")};
  }
`;

export const Price = styled.h3`
  font-family: "Astron";
  letter-spacing: 1px;
  font-weight: 100;
  font-size: ${(props: Props) => (props.big ? "20px" : "15px")};

  @media screen and (min-width: 425px) {
    font-size: ${(props: Props) => (props.big ? "22px" : "18px")};
  }
`;

export const Extra = styled.h4`
  margin-bottom: 10px;
  font-family: "Besley-Bold";
  text-align: center;

  @media only screen and (min-width: 425px) {
    font-size: 18px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 158px;
  height: 37px;
  color: #fc5775;
  font-weight: 700;
  cursor: pointer;
  margin-top: ${(props: Props) => (props.lessMargin ? "10px" : "20px")};
  background: none;
  outline: none;
  border: 2px solid #fc5775;
  font-family: "Astron";
  animation: background-change 1s infinite;
  animation-direction: alternate;
  align-items: center;
  display: ${(props: Props) => (props.display ? "none" : "block")};

  @media screen and (min-width: 375px) {
    margin-top: 30px;
  }

  @media only screen and (min-width: 425px) {
    width: 180px;
    height: 40px;
  }

  @media only screen and (min-width: 1024px) {
    width: 200px;
    height: 43px;
    font-size: 17px;
    animation: ${(props: Props) =>
      props.animate ? "background-change 1s infinite" : "none"};
  }

  @media screen and (min-width: 1440px) {
    width: 230px;
    height: 50px;
    font-size: 19px;
  }

  @keyframes background-change {
    100% {
      background: #fc5775;
      color: white;
    }
  }
`;

export const ProductButton = styled(Button)`
  animation: off;
  margin-top: 20px;
  width: 170px;
  background: rgba(0, 0, 0, 0.3);
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const PhoneButton = styled(ProductButton)`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

//EXTRAS

export const SubTitle = styled.p`
  font-family: "Astron";
  font-size: 16px;

  @media only screen and (min-width: 425px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 23px;
  }
`;

// CART
export const CartContainer = styled.div`
  position: relative;
  width: 40px;
  height: 30px;
  margin-right: 60px;
  @media screen and (min-width: 375px) {
    margin-bottom: 5px;
    margin-right: 65px;
  }
  @media screen and (min-width: 768px) {
    margin-top: -2px;
    margin-bottom: 17px;
    margin-right: 80px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const CartIndicator = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  font-size: 0.6rem;
  padding: 2.5px 5px;
  background: #fc5775;
  border-radius: 50px;
`;

export const Image = styled.img`
  height: ${(props: Props) => (props.height ? `${props.height}px` : "100%")};
  width: ${(props: Props) => (props.width ? `${props.width}px` : "100%")};
`;
