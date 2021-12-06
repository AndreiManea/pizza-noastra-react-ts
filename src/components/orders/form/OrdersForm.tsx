import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { cart, modalType, ordersForm } from "../../../recoil/recoil";
import { Button } from "../../../styles/generalStyles";
import { EModalType } from "../../../types/types";
import Dropdown from "./dropdown/Dropdown";
import Input from "./input/Input";

function OrdersForm() {
  const [form, setForm] = useRecoilState(ordersForm);
  const orders = useRecoilValue(cart);
  const setModalType = useSetRecoilState(modalType);

  const submitHandler = (e) => {
    e.preventDefault();
    const formCheck = Object.entries(form);
    let errObj = {};
    formCheck.forEach((el) => {
      if (
        (el[1].value.length === 0 || el[1].value === "Selectati Localitatea") &&
        el[0] !== "mentions"
      ) {
        setForm((curr) => ({
          ...curr,
          [el[0]]: { value: el[1].value, error: true },
        }));
        errObj = {
          ...errObj,
          [el[0]]: { value: el[1].value, error: true },
        };
        return;
      }
    });
    const errArray: any[] = Object.values(errObj);
    if (errArray.find((el) => el.error) || orders.length === 0) {
      return;
    }
    setModalType({ type: EModalType.SUMMARY });
  };
  return (
    <OrdersFormContainer onSubmit={submitHandler}>
      <Input label="Nume" placeholder="Ex: Senior Pizzescu" name="name" />
      <Dropdown />
      <Input
        label="Adresa"
        placeholder="Ex: Str.Foametei Nr.10"
        name="address"
      />
      <Input label="Telefon" placeholder="Ex: 0712345678" name="telephone" />
      <Input
        label="Mentiuni"
        placeholder="Ex: Burger fara ceapa"
        name="mentions"
      />
      <OrdersSubmit type="submit">Trimite Comanda</OrdersSubmit>
    </OrdersFormContainer>
  );
}

const OrdersFormContainer = styled.form``;
const OrdersSubmit = styled(Button)`
  animation: off;
  background: rgba(0, 0, 0, 0.75);
  font-family: "Astron";
  margin: 0 auto;
  width: 70%;
`;

export default OrdersForm;
