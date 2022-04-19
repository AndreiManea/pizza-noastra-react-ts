import styled from "styled-components";
import React, { useState, useEffect } from "react";
import icon from "../../assets/burgerIcon.svg";
import cartIcon from "../../assets/cart.svg";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import { useRecoilValue } from "recoil";
import { cart, orderSuccess } from "../../recoil/recoil";
import Order from "../orders/Order";
import {
  CartContainer,
  CartIndicator,
  Image,
  Props,
} from "../../styles/generalStyles";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const cartValue = useRecoilValue(cart);
  const successOrder = useRecoilValue(orderSuccess);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Container navbar={navbar}>
      <NavLink to="/">
        <IconContainer>
          <Image src={icon} width={50} height={40} />
          <TitleContainer>
            <p>PIZZA</p>
            <p className="noColor">NOASTRA</p>
          </TitleContainer>
        </IconContainer>
      </NavLink>
      <div className="container">
        <CartContainer onClick={() => setOpenCart(!openCart)}>
          <Image src={cartIcon} />
          <CartIndicator>{!successOrder ? cartValue.length : 0}</CartIndicator>
        </CartContainer>
        <BurgerMenu open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <Order open={openCart} setOpen={() => setOpenCart(!openCart)} />
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 55px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: ${(props: Props) =>
    props.navbar ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  /* rgba(218, 223, 225, 0.4 */
  transition: background-color 100ms ease-in;
  padding: 10px 8px;

  @media screen and (min-width: 375px) {
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-left: 20px;
  }

  @media screen and (min-width: 1024px) {
    height: 65px;
  }

  @media only screen and (min-width: 1440px) {
    height: 75px;
  }

  .container {
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
      width: auto;
      height: 60px;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Astron";
  font-size: 13px;

  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }

  p {
    color: #fc5775;
    font-weight: 500;
    margin-right: 5px;

    @media screen and (min-width: 375px) {
      font-size: 15px;
    }

    @media screen and (min-width: 425px) {
      font-size: 17px;
      margin-right: 7px;
    }

    @media screen and (min-width: 768px) {
      font-size: 19px;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 21px;
    }
  }

  .noColor {
    color: white;
  }
`;
