import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { modalProduct, modalType } from "../../../recoil/recoil";
import { Image, Props } from "../../../styles/generalStyles";
import { EModalType } from "../../../types/types";
import minusBtnImg from "../../../assets/minusBtn.svg";
import plusBtnImg from "../../../assets/plusBtn.svg";

function Checkbox({ name, id, price }) {
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(1);
  const [mProduct, setModalProduct] = useRecoilState(modalProduct);
  const { type } = useRecoilValue(modalType);
  const checkboxHandler = () => {
    if (type === EModalType.PIZZA) {
      setActive(!active);
      if (!active) {
        setModalProduct({
          ...mProduct,
          extras: [...mProduct.extras, { name: name, id: id, price: price }],
        });
      } else {
        setModalProduct({
          ...mProduct,
          extras: mProduct.extras.filter((extra) => extra.id !== id),
        });
      }
    } else {
      setActive(!active);
      if (!active) {
        setModalProduct({
          ...mProduct,
          extras: [
            ...mProduct.extras,
            { name: name, id: id, price: price, count: 1 },
          ],
        });
        setCounter(1);
      }
    }
  };

  const counterHandler = (num) => {
    setCounter(counter + num);
    setModalProduct({
      ...mProduct,
      extras: mProduct.extras.map((extra) =>
        extra.id === id ? { ...extra, count: extra.count + num } : { ...extra }
      ),
    });
  };

  useEffect(() => {
    if (counter === 0) {
      setActive(false);
      setModalProduct({
        ...mProduct,
        extras: mProduct.extras.filter((extra) => extra.id !== id),
      });
    }
    if (mProduct.size) {
      setActive(false);
      setModalProduct({
        ...mProduct,
        extras: [],
      });
    }
    // eslint-disable-next-line
  }, [counter, mProduct.size]);

  const renderCheckbox = () => {
    if (type === EModalType.PIZZA) {
      return (
        <PizzaCheckBoxContainer
          onClick={checkboxHandler}
          active={active}
        ></PizzaCheckBoxContainer>
      );
    } else {
      return (
        <CrispyCheckBoxContainer>
          <CrispyCheckBox active={!active} onClick={checkboxHandler} />
          <CounterContainer active={active}>
            <CounterImage>
              <Image
                onClick={() => counterHandler(-1)}
                src={minusBtnImg}
                alt="Plus Button"
              />
            </CounterImage>
            <CounterValue>{counter}</CounterValue>
            <CounterImage>
              <Image
                onClick={() => counterHandler(1)}
                src={plusBtnImg}
                alt="Minus Button"
              />
            </CounterImage>
          </CounterContainer>
        </CrispyCheckBoxContainer>
      );
    }
  };

  return renderCheckbox();
}
const CheckboxContainer = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid #fc5775;
  cursor: pointer;
`;

const PizzaCheckBoxContainer = styled(CheckboxContainer)`
  background: ${(props: Props) =>
    props.active ? "#fc5775" : "rgba(0,0,0,0.5)"};
`;

const CrispyCheckBoxContainer = styled.div`
  color: white;
`;

const CrispyCheckBox = styled(CheckboxContainer)`
  display: ${(props: Props) => (!props.active ? "none" : "block")};
`;

const CounterContainer = styled.div`
  display: ${(props: Props) => (props.active ? "flex" : "none")};
  width: 60px;
`;

const CounterImage = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  @media screen and (min-width: 425px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 55px;
  }
`;

const CounterValue = styled.p`
  margin: 0 5px;
  width: 20px;
  height: auto;
  color: white;
  text-align: center;
  @media screen and (min-width: 425px) {
    padding-top: 3px;
    width: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 45px;
  }
`;

export default Checkbox;
