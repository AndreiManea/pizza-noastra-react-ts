import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cart } from "../../recoil/recoil";
import { Image } from "../../styles/generalStyles";
import closeBtnImg from "../../assets/closeButton.svg";

function OrderSummary() {
  const [orders, setOrders] = useRecoilState(cart);
  const priceReducer = orders.reduce((acc, curr) => {
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

  const deleteHandler = (id) =>
    setOrders(orders.filter((order) => order.id !== id));

  const orderPriceReducer = (id) => {
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

  const renderItems = () =>
    orders.map((order) => {
      return (
        <ItemContainer>
          <ItemInfo>
            <ItemName>
              {`${order.name} `}
              {order.type === "pizza" && order.size}
            </ItemName>
            {order.type === "burger" || order.type === "crispy" ? (
              <ItemIncluded>(CARTOFI PRAJITI, SOS {order.sauce})</ItemIncluded>
            ) : null}
            {order.type !== "salad" ? (
              <ItemExtras>
                {order.extras.length > 0 &&
                  order.extras.map((extra) => (
                    <ItemExtraName key={extra.name}>
                      {order.type === "burger" ||
                      order.type === "crispy" ||
                      order.type === "bucket"
                        ? `X${extra.count} `
                        : null}
                      EXTRA {extra.name}
                    </ItemExtraName>
                  ))}
              </ItemExtras>
            ) : null}
            <ItemLine />
            <ItemPrice>
              PRET:
              <span>{orderPriceReducer(order.id)} LEI</span>
            </ItemPrice>
          </ItemInfo>
          <CloseBtnContainer onClick={() => deleteHandler(order.id)}>
            <Image src={closeBtnImg} alt="X icon" width={20} height={20} />
          </CloseBtnContainer>
        </ItemContainer>
      );
    });
  return (
    <Container>
      <OrderContainer>
        <LabelContainer>
          <Label>Descrierea Comenzii</Label>
        </LabelContainer>
        <ItemsContainer>
          {orders.length === 0 && (
            <EmptyOrder>Nu ai adaugat nici un produs</EmptyOrder>
          )}
          {renderItems()}
        </ItemsContainer>
      </OrderContainer>
      {orders.length !== 0 && (
        <OrderTotal>
          TOTAL :<span>{priceReducer} LEI</span>
        </OrderTotal>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 1rem;
`;

const OrderContainer = styled.div`
  width: 100%;
  font-family: "Besley-New";
`;

const LabelContainer = styled.div`
  min-height: 25px;
  position: relative;
  margin-top: 25px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Astron";
  align-items: center;
  padding: 5px 0 10px 0;
`;

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  :first-child {
    margin-top: 0;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  margin: 0;
  color: #fc5775;
  font-size: 1rem;
  line-height: 15px;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const ItemExtras = styled.div`
  margin-top: 10px;
`;

const ItemExtraName = styled(ItemName)`
  font-size: 1em;
  margin-top: 5px;
  :first-child {
    margin-top: 0;
  }
`;

const ItemIncluded = styled.p`
  margin: 0;
  margin-top: 10px;
  color: #fc5775;
  font-size: 0.6rem;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const ItemLine = styled.div`
  width: 85vw;
  margin-top: 10px;
  border: 1px solid #fc5775;
  height: 0px;
  @media screen and (min-width: 768px) {
    width: 48vw;
  }
  @media screen and (min-width: 1024px) {
    width: 30vw;
  }
`;

const ItemPrice = styled.p`
  color: white;
  font-size: 1rem;
  margin-top: 10px;
  span {
    margin-left: 10px;
    color: #fc5775;
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const CloseBtnContainer = styled.div`
  position: absolute;
  right: 25px;
  bottom: 2px;
`;

const Label = styled.label`
  font-family: "Astron";
  color: white;
  position: absolute;
  left: 0;
`;

const EmptyOrder = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #fc5775;
  width: 100%;
`;

const OrderTotal = styled.h4`
  margin: 0;
  color: white;
  font-size: 1.3rem;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Astron";
  text-align: center;
  span {
    margin-left: 0.5rem;
    color: #fc5775;
  }
`;
export default OrderSummary;
