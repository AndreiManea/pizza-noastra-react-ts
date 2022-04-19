import React from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  cart,
  modalType,
  ordersForm,
  orderSuccess,
} from "../../../recoil/recoil";
import { SummaryContainer, SummaryTitle, SummaryTotal } from "../styles";
import { Button } from "../../../styles/generalStyles";

function SummaryModal() {
  const orders = useRecoilValue(cart);
  const form = useRecoilValue(ordersForm);
  const setModalType = useSetRecoilState(modalType);
  const setSuccess = useSetRecoilState(orderSuccess);

  //REDUCERS RELATED
  const productPriceReducer = (id) => {
    const foundProduct = orders.find((el) => el.id === id);
    const extrasPriceReducer =
      foundProduct.type !== "salad"
        ? foundProduct.extras.reduce(
            (acc, curr) =>
              (acc +=
                foundProduct.type === "pizza"
                  ? curr.price
                  : curr.price * curr.count),
            0
          )
        : 0;

    return foundProduct.price + extrasPriceReducer;
  };
  const productsTotalReducer = orders.reduce((acc, curr) => {
    const type = curr.type;
    const extrasReducer =
      type !== "salad"
        ? curr.extras.reduce((acc, curr) => {
            acc += type === "pizza" ? curr.price : curr.price * curr.count;
            return acc;
          }, 0)
        : 0;
    acc += curr.price + extrasReducer;

    return acc;
  }, 0);

  //RENDER RELATED
  const renderProducts = () =>
    orders.map((order) => {
      return (
        <ProductContainer>
          <ProductName>
            {`${order.name} `}
            {order.type === "pizza" && order.size}
          </ProductName>
          {order.type === "burger" || order.type === "crispy" ? (
            <ProductIncluded>
              (CARTOFI PRAJITI, SOS {order.sauce})
            </ProductIncluded>
          ) : null}
          {order.type !== "salad" ? (
            <ProductExtras>
              {order.extras.length > 0 &&
                order.extras.map((extra) => (
                  <ProductExtraName key={extra.name}>
                    {order.type === "burger" ||
                    order.type === "crispy" ||
                    order.type === "bucket"
                      ? `X${extra.count} `
                      : null}
                    EXTRA {extra.name}
                  </ProductExtraName>
                ))}
            </ProductExtras>
          ) : null}
          <ProductLine />
          <ProductPrice>
            PRET:
            <span>{productPriceReducer(order.id)} LEI</span>
          </ProductPrice>
        </ProductContainer>
      );
    });
  const renderFields = () => (
    <SummaryFields>
      <SummaryField>
        <FieldName>NUME: </FieldName>
        <FieldValue>{form.name.value}</FieldValue>
      </SummaryField>
      <SummaryField>
        <FieldName>LOCALITATE: </FieldName>
        <FieldValue>{form.city.value}</FieldValue>
      </SummaryField>
      <SummaryField>
        <FieldName>ADRESA: </FieldName>
        <FieldValue>{form.address.value}</FieldValue>
      </SummaryField>
      <SummaryField>
        <FieldName>TELEFON: </FieldName>
        <FieldValue>{form.telephone.value}</FieldValue>
      </SummaryField>
      {form.mentions.value.length > 0 && (
        <SummaryField>
          <FieldName>MENTIUNI: </FieldName>
          <FieldValue>{form.mentions.value}</FieldValue>
        </SummaryField>
      )}
    </SummaryFields>
  );

  //TRANSPORT RELATED
  const isUnderPrice = () => productsTotalReducer < 50;
  const isRightLocation = () =>
    form.city.value === "Ghioroc" || form.city.value === "Cuvin";

  //TELEGRAM RELATED
  const orderArranger = orders.reduce((acc, order) => {
    const orderExtraReducer =
      order.type !== "salad"
        ? order?.extras.reduce((acc, curr) => {
            acc +=
              order.type === "pizza"
                ? `%0a  EXTRA ${curr.name}`
                : `%0a  X${curr.count} EXTRA ${curr.name}`;
            return acc;
          }, "")
        : "";
    acc += `%0a%0a<b>${order.name}</b> ${
      order.size ? order.size : order.sauce ? `${order.sauce}` : ""
    } ${orderExtraReducer}`;
    return acc;
  }, "");

  const orderMentions =
    form.mentions.value.length > 0
      ? `%0a%0a<b>Mentiuni: ${form.mentions.value} </b>`
      : "";

  const sendOrder = async () => {
    console.log("ORDER MENTIONS", orderMentions);
    const BASIC_URL =
      "https://api.telegram.org/bot2103869959:AAGGfnz4kjmG6AYauNKqp3H8xDu_xtC7Pro/sendMessage?chat_id=-776946395&parse_mode=html&text=";
    const text = `<b>Nume:</b> ${form.name.value}%0a<b>Localitate:</b> ${
      form.city.value
    }%0a<b>Adresa:</b> ${form.address.value}%0a<b>Telefon:</b> ${
      form.telephone.value
    }%0a%0a<b>Comanda:</b> ${
      isUnderPrice() && !isRightLocation()
        ? orderArranger.concat("%0a%0a<b>TAXA TRANSPORT</b>")
        : orderArranger
    } ${orderMentions}%0a%0a<b>Total:  ${
      isUnderPrice() && !isRightLocation()
        ? productsTotalReducer + 10
        : productsTotalReducer
    } LEI</b>`;
    const COMPLETE_URL = BASIC_URL + text;
    const request = await fetch(COMPLETE_URL, {
      method: "POST",
    });
    setModalType({ type: null });
    setSuccess(true);
    return request;
  };

  return (
    <SummaryContainer>
      <SummaryTitle>SUMAR COMANDA</SummaryTitle>
      <SummaryProducts>
        <ProductsContainer>
          {renderProducts()}
          {isUnderPrice() && !isRightLocation() && (
            <ProductContainer>
              <ProductName>TAXA TRANSPORT</ProductName>
              <ProductLine />
              <ProductPrice>
                PRET:
                <span>10 LEI</span>
              </ProductPrice>
            </ProductContainer>
          )}
        </ProductsContainer>
      </SummaryProducts>
      <SummaryTotal>
        TOTAL:{" "}
        {isUnderPrice() && !isRightLocation()
          ? productsTotalReducer + 10
          : productsTotalReducer}{" "}
        LEI
      </SummaryTotal>
      {renderFields()}
      <SummarySubmit onClick={() => sendOrder()}>Trimite Comanda</SummarySubmit>
    </SummaryContainer>
  );
}

const SummaryProducts = styled.div``;

const SummarySubmit = styled(Button)`
  animation: off;
  background: rgba(0, 0, 0, 0.75);
  font-family: "Astron";
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
`;

const SummaryFields = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryField = styled.div`
  display: flex;
  color: #fc5775;
  margin-top: 10px;
  font-size: 0.8rem;
  :first-child {
    margin-top: 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const FieldName = styled.p`
  margin: 0;
  line-height: 20px;
`;
const FieldValue = styled.p`
  margin: 0;
  margin-left: 10px;
  line-height: 20px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Astron";
  /* align-items: center; */
  padding: 5px 0 10px 0;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  :first-child {
    margin-top: 0;
  }
`;
const ProductName = styled.p`
  margin: 0;
  color: #fc5775;
  font-size: 0.8rem;
  line-height: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const ProductExtras = styled.div`
  margin-top: 5px;
`;

const ProductExtraName = styled(ProductName)`
  font-size: 0.7rem;
  margin-top: 5px;
  :first-child {
    margin-top: 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const ProductIncluded = styled.p`
  margin: 0;
  margin-top: 10px;
  color: #fc5775;
  font-size: 0.6rem;
  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const ProductLine = styled.div`
  width: 100%;
  margin-top: 5px;
  border: 1px solid #fc5775;
  height: 0px;
`;

const ProductPrice = styled.p`
  color: #fc5775;
  margin: 0;
  margin-top: 10px;

  font-size: 0.9rem;
  span {
    margin-left: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export default SummaryModal;
