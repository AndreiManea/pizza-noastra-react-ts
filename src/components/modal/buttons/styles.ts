import styled from "styled-components";
import { Button, Props } from "../../../styles/generalStyles";

export const ButtonsContainer = styled.div`
  display: flex;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Buton = styled(Button)`
  margin-left: 20px;
  margin-top: 0;
  font-size: 0.7em;
  width: 45%;
  letter-spacing: 1px;
  animation: off;
  margin-bottom: 0;
  :first-child {
    margin-left: 0;
  }
  background: ${(props: Props) =>
    props.active ? "#fc5775" : "rgba(0,0,0,0.5)"};
  color: ${(props: Props) => (props.active ? "black" : "#fc5775")};
`;
