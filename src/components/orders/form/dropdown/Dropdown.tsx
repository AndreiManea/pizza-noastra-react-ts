import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button, Image, Props } from "../../../../styles/generalStyles";
import { useRecoilState } from "recoil";
import { ordersForm } from "../../../../recoil/recoil";

function Dropdown() {
  // const [dropdownValue, setDropdownValue] = useState('Selectati Localitatea');
  const [dropdownValue, setDropdownValue] = useRecoilState(ordersForm);
  const [open, setOpen] = useState(false);

  const dropDownValueHandler = (e, name) => {
    e.preventDefault();
    setDropdownValue({
      ...dropdownValue,
      city: { value: name, error: false },
    });
    setOpen(!open);
  };

  const dropDownOpenHandler = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <DropdownContainer>
      <DropdownForm>
        <DropdownLabelContainer>
          <DropdownLabel>Localitate</DropdownLabel>
        </DropdownLabelContainer>
        <DropdownButton onClick={(e) => dropDownOpenHandler(e)}>
          {dropdownValue.city.value}
          <ImageWrapper>
            <Image
              src="/icons/dropdown.svg"
              alt="dropdown icon"
              width={20}
              height={20}
            />
          </ImageWrapper>
        </DropdownButton>
      </DropdownForm>
      <DropDownOpen display={open}>
        <DropDownFirstRow>
          <DropDownOption onClick={(e) => dropDownValueHandler(e, "Ghioroc")}>
            Ghioroc
          </DropDownOption>
          <DropDownOption onClick={(e) => dropDownValueHandler(e, "Minis")}>
            Minis
          </DropDownOption>
          <DropDownOption onClick={(e) => dropDownValueHandler(e, "Cuvin")}>
            Cuvin
          </DropDownOption>
        </DropDownFirstRow>
        <DropDownSecondRow>
          <DropDownOption onClick={(e) => dropDownValueHandler(e, "Covasant")}>
            Covasant
          </DropDownOption>
          <DropDownOption onClick={(e) => dropDownValueHandler(e, "Sambateni")}>
            Sambateni
          </DropDownOption>
          <DropDownOption onClick={(e) => dropDownValueHandler(e, "Paulis")}>
            Paulis
          </DropDownOption>
        </DropDownSecondRow>
      </DropDownOpen>
      <DropdownLabelContainer>
        <DropdownErrorLabel display={dropdownValue.city.error}>
          * Acest camp este obligatoriu
        </DropdownErrorLabel>
      </DropdownLabelContainer>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  margin-bottom: 15px;
`;
const DropdownForm = styled.div``;
const DropdownButton = styled(Button)`
  font-family: "Astron";
  display: flex;
  animation: off;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 1024px) {
    font-size: 0.9em;
  }
`;
const ImageWrapper = styled.div`
  margin-left: 15px;
  padding-top: 2px;
`;

const DropdownLabelContainer = styled.div`
  min-height: 25px;
  position: relative;
`;

const DropdownLabel = styled.label`
  font-family: "Astron";
  position: absolute;
  left: 0;
  color: white;
`;
const DropdownErrorLabel = styled.label`
  font-family: "Besley-New";
  position: absolute;
  color: #fc5775;
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  display: ${(props: Props) => (props.display ? "block" : "none")};
`;

const DropDownOpen = styled.div`
  display: ${(props: Props) => (props.display ? "flex" : "none")};
  flex-direction: column;
`;

const DropDownFirstRow = styled.div`
  display: flex;
  justify-content: center;
`;
const DropDownSecondRow = styled.div`
  display: flex;
  justify-content: center;
`;
const DropDownOption = styled(Button)`
  animation: off;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Astron";
  font-size: 0.7rem;
  width: 33%;
  margin-top: 5px;
  margin-right: 7.5px;
  :nth-child(3) {
    margin-right: 0;
  }
`;

export default Dropdown;
