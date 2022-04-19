import styled from "styled-components";
import { SubTitle } from "../../../../styles/generalStyles";

function ExtrasPizza({ extras }) {
  return (
    <>
      <ExtrasContainer>
        <SubTitle>Extras Pizza</SubTitle>
        <WeightContainer>
          <Weight>MEDIE</Weight>
          <Weight>MARE</Weight>
        </WeightContainer>
        {extras
          .filter((extra) => extra.type === "pizza")
          .map((extra) => {
            return (
              <Extras key={extra.id}>
                <Ingredient>{extra.ingredient}</Ingredient>
                <Price>
                  {extra.ingredient === "Prosciutto Crudo" ? "5 lei" : "3 lei"}
                </Price>
                <Price>
                  {extra.ingredient === "Prosciutto Crudo" ? "10 lei" : "5 lei"}
                </Price>
              </Extras>
            );
          })}
      </ExtrasContainer>
    </>
  );
}

export default ExtrasPizza;

const ExtrasContainer = styled.div`
  height: auto;
  background: rgba(0, 0, 0, 0.3);
  width: 90%;
  padding: 10px 15px 10px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  font-family: "Besley-New";

  @media only screen and (min-width: 768px) {
    width: 75%;
  }

  @media only screen and (min-width: 1024px) {
    width: 60%;
  }

  @media only screen and (min-width: 1440px) {
    width: 50%;
  }
`;

const Extras = styled.div`
  display: flex;
  width: 95%;
  height: 80px;
  color: white;
  justify-content: space-between;
  align-items: baseline;

  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`;

const Ingredient = styled.div`
  font-size: 15px;
  width: 100px;
  margin-right: 10px;

  @media screen and (min-width: 375px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 19px;
    width: 175px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 21px;
    width: 220px;
  }
`;
const Weight = styled.div`
  font-size: 14px;
  padding-left: 15px;

  @media screen and (min-width: 375px) {
    font-size: 16px;
  }

  @media screen and (min-width: 425px) {
    font-size: 18px;
    padding-left: 24px;
  }

  @media only screen and (min-width: 768px) {
    padding-left: 40px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

const Price = styled.div`
  font-size: 13px;
  font-family: "Astron";

  @media screen and (min-width: 375px) {
    font-size: 15px;
  }

  @media screen and (min-width: 425px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 21px;
  }
`;

const WeightContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-end;
  margin: 10px 0 15px auto;
  font-family: "Astron";

  @media screen and (min-width: 375px) {
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media only screen and (min-width: 1440px) {
    width: 57%;
  }
`;
