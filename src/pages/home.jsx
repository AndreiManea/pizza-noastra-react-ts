import styled from "styled-components";
import Footer from "../components/footer/Footer";
import HomeContent from "../components/home/HomeContent";
import Modal from "../components/modal/Modal";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HomeContent />
      <Footer />
      <Modal />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: auto;
`;
