import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import { products, secondaryFilters } from "../data";
import MenuContent from "../components/meniu/MenuContent";
import { useEffect } from "react";

const Meniu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Navbar />
      <MenuContent products={products} categories={secondaryFilters} />
    </Container>
  );
};

export default Meniu;

const Container = styled.div`
  height: auto;
`;
