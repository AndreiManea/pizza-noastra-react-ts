import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ordersForm } from "../../../../recoil/recoil";
import { Props } from "../../../../styles/generalStyles";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
}

function Input({ label, placeholder, name }: IProps) {
  const [input, setInput] = useRecoilState(ordersForm);
  const inputHandler = (e) => {
    setInput({ ...input, [name]: { value: e.target.value, error: false } });
  };

  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>{label}</InputLabel>
      </InputLabelContainer>
      <InputField
        placeholder={placeholder}
        value={input[name].value}
        onChange={(e) => inputHandler(e)}
      />
      <InputLabelContainer>
        <InputErrorLabel display={input[name].error}>
          * Acest camp este obligatoriu
        </InputErrorLabel>
      </InputLabelContainer>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  margin-bottom: 15px;
`;
const InputLabelContainer = styled.div`
  min-height: 25px;
  position: relative;
`;
const InputLabel = styled.label`
  font-family: "Astron";
  color: white;
  position: absolute;
  left: 0;
`;
const InputErrorLabel = styled.label`
  font-family: "Besley-New";
  position: absolute;
  color: #fc5775;
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  display: ${(props: Props) => (props.display ? "block" : "none")};
`;

const InputField = styled.input`
  border: 2px solid #fc5775;
  box-sizing: border-box;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  padding: 10px 20px;
  color: white;
  font-family: "Besley-New";
  ::placeholder {
    color: #fc5775;
  }
`;

export default Input;
