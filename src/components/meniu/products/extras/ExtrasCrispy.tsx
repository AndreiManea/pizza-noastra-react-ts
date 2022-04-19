import styled from "styled-components";
import { SubTitle } from "../../../../styles/generalStyles";

function ExtrasCrispy({ extras }) {
  return (
    <>
      <ExtrasContainer>
        <SubTitle>Extras Crispy</SubTitle>
        {extras
          .filter((extra) => extra.type === "crispy")
          .map((extra) => {
            return (
              <Extras key={extra.id}>
                <Ingredients>
                  <Ingredient>{extra.ingredient}</Ingredient>
                </Ingredients>
                <Weights>
                  <Weight>{extra.weight} g</Weight>
                </Weights>
                <Prices>
                  <Price>{extra.price} lei</Price>
                </Prices>
              </Extras>
            );
          })}
      </ExtrasContainer>
    </>
  );
}

export default ExtrasCrispy;

const ExtrasContainer = styled.div`
  height: auto;
  background: rgba(0, 0, 0, 0.3);
  width: 95%;
  margin-bottom: 20px;
  padding: 10px 15px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  font-family: "Besley-New";

  @media only screen and (min-width: 768px) {
    width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    width: 57%;
  }
`;

const Extras = styled.div`
  display: flex;
  width: 100%;
  color: white;
  justify-content: space-evenly;
  align-items: center;
`;

const Ingredient = styled.p`
  font-family: "Besley-New";
  font-size: 15px;

  @media only screen and (min-width: 425px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

const Weight = styled.p`
  font-family: "Besley-New";
  font-size: 15px;

  @media only screen and (min-width: 425px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

const Price = styled.p`
  font-size: 15px;
  font-family: "Astron";

  @media only screen and (min-width: 425px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 21px;
  }
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;

  @media only screen and (min-width: 1024px) {
    width: 160px;
  }
`;

const Weights = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;

  @media only screen and (min-width: 768px) {
    width: 70px;
  }
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
`;
