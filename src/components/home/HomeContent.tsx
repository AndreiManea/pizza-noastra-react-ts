import styled from "styled-components";
import { Button } from "../../styles/generalStyles";
import { useNavigate } from "react-router-dom";
import {
  SubContainer,
  SubTitle,
  TextContainer,
  First,
  Second,
} from "../footer/Footer";
import { useEffect } from "react";

function HomeContent() {
  const router = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <TitleContainer>
        <Title>PIZZA</Title>
        <p>NOASTRA</p>
      </TitleContainer>
      <Text>
        <p>
          Ești cumva din Ghioroc, Miniș, Cuvin, Păuliș, Sâmbăteni, sau Covăsânț?
        </p>
        <p>
          Bine ai venit la <b>Pizza Noastră</b>, prima pizzerie din Ghioroc,
          gata să-ți livreze o pizza caldă și delicioasă chiar la tine acasă!
        </p>
      </Text>
      <Button animate lessMargin onClick={() => router(`/meniu`)}>
        VEZI MENIU
      </Button>
      <Sub>
        <SubTitlee center>Orar</SubTitlee>
        <TextContainer center>
          <FirstContainer>
            <p>Luni - Vineri:</p>
            <p>Sambata:</p>
            <p>Duminica:</p>
          </FirstContainer>
          <SecondContainer>
            <p>10:00 - 20:00</p>
            <p>12:00 - 22:00</p>
            <p>17:00 - 22:00</p>
          </SecondContainer>
        </TextContainer>
      </Sub>
      <AdditionalInfo>
        <Line>Livrare gratuita in Ghioroc</Line>
        <Line>Transport gratuit la comenzi de peste 50 lei</Line>
        <Line>10 lei transport la comanda de sub 50 lei</Line>
      </AdditionalInfo>
    </Container>
  );
}

export default HomeContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 12px 40px 12px;
  align-items: center;

  @media screen and (min-width: 1024px) {
    padding-top: 100px;
  }
  /* 
    @media screen and (min-width: 1440px) {
		padding-top: 100px;
    } */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Astron";
  font-size: 23px;
  margin: 15px 0;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  p {
    color: white;

    @media screen and (min-width: 1440px) {
      font-size: 33px;
    }
  }
`;

const Title = styled.h2`
  color: #fc5775;
  font-size: 23px;
  margin-right: 10px;
  letter-spacing: 2px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 33px;
  }
`;

const Text = styled.div`
  text-align: center;
  color: white;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 55%;
  }

  p {
    font-family: "Besley-Bold";
    font-size: 14px;
    margin: 14px 0;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 70px;
  p {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;

const Line = styled.p`
  color: white;
  margin: 0 auto;
  font-family: "Besley-Bold";
  text-align: center;
  font-size: 12px;

  @media screen and (min-width: 375px) {
    font-size: 14px;
  }

  @media screen and (min-width: 425px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

const Sub = styled(SubContainer)`
  width: 85%;
  margin-top: 60px;
  padding: 10px;
  height: 170px;
  margin-bottom: 0px;
  p {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    height: 200px;
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

const SubTitlee = styled(SubTitle)`
  color: #fcb271;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const FirstContainer = styled(First)`
  p {
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

const SecondContainer = styled(Second)`
  p {
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
