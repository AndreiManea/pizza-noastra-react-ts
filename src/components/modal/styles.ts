import styled from "styled-components";
import { Button, Props } from "../../styles/generalStyles";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${(props: Props) => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.7);
  font-family: "Astron";
  z-index: 200;
  position: fixed;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10vh 0;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 20px;
  width: 75vw;
  border: 2px solid #fc5775;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    min-width: 0;
    width: 50vw;
  }
  @media screen and (min-width: 1440px) {
    width: 30vw;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px 0 20px 20px; */
`;

export const SummaryContainer = styled(ProductContainer)`
  width: 75vw;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ProductTitle = styled.h3`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fcb271;
  margin-bottom: 10px;
  padding-right: 20px;
  height: 50px;
  line-height: 30px;
  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
`;

export const SummaryTitle = styled(ProductTitle)`
  color: #fc5775;
  margin-bottom: 0;
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
`;

export const SubmitBtn = styled(Button)`
  animation: off;
  display: ${(props: Props) => (props.display ? "block" : "none")};
  margin-top: 30px;
`;

export const LabelContainer = styled.div`
  min-height: 25px;
  margin-top: 10px;
  position: relative;
  width: 100%;
  font-size: 16px;
`;

export const Label = styled.label`
  color: white;
  position: absolute;
  left: 0;
  font-size: 0.8em;
  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;

export const ErrorLabelContainer = styled(LabelContainer)`
  display: ${(props: Props) => (props.display ? "block" : "none")};
`;

export const ErrorLabel = styled(Label)`
  font-family: "Besley-News";
  position: absolute;
  color: #fc5775;
  background: rgba(0, 0, 0, 0.8);
  left: 0;
`;

//PIZZA

//CRISPY & BURGER

export const Sauces = styled.div``;
export const Sauce = styled(Button);
export const IncludedFries = styled.p`
  color: #fc5775;
  font-size: 0.8em;
  margin: 5px 0;
  margin-bottom: 15px;
  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;

//SUMMARY
export const SummaryTotal = styled.p`
  color: #fc5775;
  margin: 10px 0;
  font-size: 0.9rem;
  text-align: center;
  padding: 20px 0;
  border: 2px solid #fc5775;
  border-right: none;
  border-left: none;
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
