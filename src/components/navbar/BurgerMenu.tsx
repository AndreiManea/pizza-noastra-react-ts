import { bool, func } from "prop-types";
import styled from "styled-components";
import { Props } from "../../styles/generalStyles";

function BurgerMenu({ open, setOpen }) {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerMenu;

const StyledBurger = styled.button`
  position: absolute;
  top: 24px;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  @media screen and (min-width: 768px) {
    top: 28px;
    right: 2.5rem;
  }
  &:focus {
    outline: none;
  }

  > div {
    width: 1.7rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media screen and (min-width: 768px) {
      width: 1.85rem;
      height: 0.27rem;
    }

    :first-child {
      transform: ${(props: Props) =>
        props.open ? "rotate(45deg)" : "rotate(0deg)"};
    }

    :nth-child(2) {
      opacity: ${(props: Props) => (props.open ? "0" : "1")};
      transform: ${(props: Props) =>
        props.open ? "translateX(20px)" : "translateX(0px)"};
    }

    :nth-child(3) {
      transform: ${(props: Props) =>
        props.open ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
