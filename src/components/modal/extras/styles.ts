import styled from "styled-components";
import { Props } from "../../../styles/generalStyles";

export const Container = styled.div`
  display: ${(props: Props) => (props.display ? "flex" : "none")};
  flex-direction: column;
`;

export const LabelContainer = styled.div`
  display: ${(props: Props) => (props.display ? "block" : "none")};
  min-height: 25px;
  margin-top: 10px;
  position: relative;
  width: 100%;
  font-size: 16px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 5px;
  }
`;

export const Label = styled.label`
  color: white;
  position: absolute;
  left: 0;
  font-size: 0.8em;
  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;

export const Extra = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  align-items: center;
  @media screen and (min-width: 1440px) {
    margin-top: 15px;
  }
`;

export const ExtraTitle = styled.h5`
  color: #fc5775;
  margin-left: 10px;
  font-size: 0.7em;
  @media screen and (min-width: 375px) {
    font-size: 0.8em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;

export const ExtraPrice = styled.h5`
  color: #fcb271;
  font-size: 0.7em;
  position: absolute;
  right: 10px;
  @media screen and (min-width: 375px) {
    font-size: 0.8em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;
