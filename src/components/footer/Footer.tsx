import styled from "styled-components";
import { PhoneCall } from "@styled-icons/feather/PhoneCall";
import { Props } from "../../styles/generalStyles";

function Footer({ margin = false }) {
  return (
    <Container margin={margin ? true : false}>
      <SubContainer>
        <SubTitle>Orar</SubTitle>
        <TextContainer>
          <First>
            <p>Luni - Vineri:</p>
            <p>Sambata:</p>
            <p>Duminica:</p>
          </First>
          <Second>
            <p>10:00 - 20:00</p>
            <p>12:00 - 22:00</p>
            <p>17:00 - 22:00</p>
          </Second>
        </TextContainer>
      </SubContainer>
      <SubContainer align>
        <SubTitle>Adresa</SubTitle>
        <TextContainer>Comuna Ghioroc Nr.87 (In centru)</TextContainer>
      </SubContainer>
      <SubContainer>
        <SubTitle center>Contact</SubTitle>
        <TextContainer center>
          <Button onClick={() => window.open("tel:0759503346")}>
            <Icon />
            <Second big>0759503346</Second>
          </Button>
        </TextContainer>
      </SubContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: auto;
  margin: ${(props: Props) => (props.margin ? "30vh" : "5vh")} 10px 0px 10px;
  padding: 10px;
  z-index: 99;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 425px) {
    margin-right: 15px;
    margin-left: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 75%;
    margin: ${(props: Props) => (props.margin ? "30vh" : "5vh")} auto 0px auto;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: ${(props: Props) => (props.margin ? "50vh" : "30vh")} auto 0px auto;
    align-items: center;
  }
`;

export const SubTitle = styled.h3`
  text-align: ${(props: Props) => (props.center ? "center" : "left")};
  color: white;
  padding: 10px 5px;
  font-family: "Astron";
  font-weight: 100;
  font-size: 16px;

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;

export const SubContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 13px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    height: 180px;
    width: 28vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: ${(props: Props) => (props.align ? "center" : "left")};
  }
`;

export const TextContainer = styled.div`
  color: white;
  display: flex;
  justify-content: ${(props: Props) => (props.center ? "center" : "left")};
  padding: 5px 0px;
  font-family: "Besley-New";
  font-size: 14px;
  align-items: center;

  @media screen and (min-width: 375px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const First = styled.div`
  font-size: 14px;

  @media screen and (min-width: 375px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  p {
    margin-top: 0px;
    margin-bottom: 14px;
  }
`;

export const Second = styled.div`
  margin-left: 20px;
  font-size: ${(props: Props) => (props.big ? "18px" : "14px")};
  margin-top: ${(props: Props) => (props.big ? "1px" : "0px")};

  @media screen and (min-width: 375px) {
    font-size: ${(props: Props) => (props.big ? "20px" : "16px")};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-size: ${(props: Props) => (props.big ? "22px" : "18px")};
  }

  p {
    margin-top: 0px;
    margin-bottom: 14px;
  }
`;

const Icon = styled(PhoneCall)`
  height: 25px;
`;

const Button = styled.button`
  width: 173px;
  height: 43px;
  color: #fc5775;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  margin-top: 5px;
  background: none;
  display: flex;
  align-items: center;
  outline: none;
  border: 2px solid #fc5775;
  animation: background-change 1s infinite;
  animation-direction: alternate;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    width: 210px;
    height: 47px;
    padding: 15px;
  }

  @keyframes background-change {
    99.9% {
      background: #fc5775;
      color: white;
    }
    100% {
      background: none;
    }
  }
`;
