import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Image } from "../styles/generalStyles";
import locationImg from "../assets/location.svg";
import numberImg from "../assets/phone.svg";
import Modal from "../components/modal/Modal";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container margin>
      <Navbar />
      <ContactContainer>
        <Title>CONTACT</Title>
        <SubContainers>
          <SubContainer>
            <Image src={locationImg} width={120} height={120} />
            <SubTitle>LOCATIE</SubTitle>
            <Location>Comuna Ghioroc Nr.87 (In centru)</Location>
          </SubContainer>
          <SubContainer>
            <Image src={numberImg} width={120} height={120} />
            <SubTitle>NR. TELEFON</SubTitle>
            <PhoneNr>0759503346</PhoneNr>
          </SubContainer>
        </SubContainers>
      </ContactContainer>
      <Footer margin />
      <Modal />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: auto;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  color: #ffb182;
  letter-spacing: 2px;
  font-family: "Astron";

  @media only screen and (min-width: 1024px) {
    font-size: 29px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  padding-top: 10vh;
  flex-direction: column;
  height: 90%;
  color: white;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding-top: 15vh;
  }
`;

const SubTitle = styled.h2`
  font-size: 17px;
  color: #ffb182;
  letter-spacing: 2px;

  @media only screen and (min-width: 425px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 21px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const Location = styled.div`
  width: 75%;
  font-size: 16px;
  letter-spacing: 1px;

  @media only screen and (min-width: 425px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

const PhoneNr = styled.div`
  width: 60%;
  font-size: 20px;
  letter-spacing: 1px;

  @media only screen and (min-width: 425px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 26px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

const SubContainers = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    margin-top: 50px;
    flex-direction: row;
    width: 80%;
  }
`;

const SubContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 85%;
  justify-content: space-between;
  margin: 15px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-family: "Besley-New";

  @media only screen and (min-width: 768px) {
    width: 75%;
  }

  @media only screen and (min-width: 1024px) {
    flex: 0.45;
    height: 300px;
  }

  @media only screen and (min-width: 1440px) {
    height: 350px;
  }
`;
