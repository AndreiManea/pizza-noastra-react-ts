import styled from "styled-components";
import { bool } from "prop-types";
import cartIcon from "../../assets/cart.svg";
import { useRecoilValue } from "recoil";
import { cart, orderSuccess } from "../../recoil/recoil";
import { useState } from "react";
import {
  CartContainer,
  CartIndicator,
  Image,
  Props,
} from "../../styles/generalStyles";
import Order from "../orders/Order";
import { Link, useLocation } from "react-router-dom";

function Menu({ open }) {
  const router = useLocation();
  const { pathname } = router;
  const splitLocation = pathname.split("/");
  const cartValue = useRecoilValue(cart);
  const [openCart, setOpenCart] = useState(false);
  const successOrder = useRecoilValue(orderSuccess);

  return (
    <MenuContainer open={open}>
      <DesktopCartContainer onClick={() => setOpenCart(!openCart)}>
        <Image src={cartIcon} />
        <CartIndicator>{!successOrder ? cartValue.length : 0}</CartIndicator>
      </DesktopCartContainer>
      <li>
        <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
          ACASA
        </Link>
      </li>
      <li>
        <Link
          className={splitLocation[1] === "meniu" ? "active" : ""}
          to="/meniu"
        >
          MENIU
        </Link>
      </li>
      <li>
        <Link
          className={splitLocation[1] === "contact" ? "active" : ""}
          to="/contact"
        >
          CONTACT
        </Link>
      </li>
      <OrderContainer>
        <Order open={openCart} setOpen={() => setOpenCart(!openCart)} />
      </OrderContainer>
    </MenuContainer>
  );
}

export default Menu;

Menu.propTypes = {
  open: bool.isRequired,
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  height: 200px;
  width: 100vw;
  text-align: center;
  position: absolute;
  right: 0;
  margin-top: 23px;
  transform: ${(props: Props) =>
    props.open ? "translateX(0)" : "translateX(-100%)"};

  @media screen and (min-width: 768px) {
    height: 230px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 430px;
    background: none;
    transform: none;
    margin-top: 0px;
    right: 30px;
    margin-right: 50px;
  }

  li {
    color: white;
    list-style-type: none;
    font-size: 1rem;
    font-family: "Astron";
    padding: 1rem 0;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media screen and (min-width: 425px) {
      font-size: 1.1rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
    }

    @media screen and (min-width: 1024px) {
      padding: 1.5rem 0;
      font-size: 1.2rem;
    }

    @media screen and (min-width: 1440px) {
      font-size: 1.3rem;
    }
  }

  .active {
    color: #fcb271;

    @media screen and (min-width: 1024px) {
      background: none;
      padding: 1.5rem 0;
      font-weight: 600;
    }
  }
`;

const DesktopCartContainer = styled(CartContainer)`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    width: 45px;
    margin: 0;
    margin-top: 15px;
    cursor: pointer;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 17px;
  }
`;

const OrderContainer = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
