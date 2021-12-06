import styled from "styled-components";
import { Image, Props, Title } from "../../styles/generalStyles";
import OrdersForm from "./form/OrdersForm";
import OrderSummary from "./OrderSummary";
import { orderSuccess } from "../../recoil/recoil";
import { useRecoilValue } from "recoil";
import backgroundImg from "../../assets/background.svg";
import phoneImg from "../../assets/phone.svg";
import facebookImg from "../../assets/Facebook.svg";
import instagramImg from "../../assets/Instagram.svg";
import googleImg from "../../assets/Google.svg";
import tikTokImg from "../../assets/TikTok.svg";

function Order({ open, setOpen }) {
  const success = useRecoilValue(orderSuccess);
  const renderOrderStatus = () =>
    success ? (
      <AfterContainer>
        <Image src={phoneImg} width={140} height={140} />
        <OrdersSucessDescription>
          Multumim pentru comanda plasata.
          <br />
          Urmariti-ne activitatea pentru noutati, oferte si promotii viitoare.
        </OrdersSucessDescription>
        <SocialContainer>
          <SocialIcon
            href="https://www.facebook.com/pizzanoastra"
            target="_blank"
          >
            <Image
              src={facebookImg}
              width={50}
              alt="Facebook Icon"
              height={50}
            />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/pizzanoastra/"
            target="_blank"
          >
            <Image
              src={instagramImg}
              width={50}
              alt="Instagram Icon"
              height={50}
            />
          </SocialIcon>
          <SocialIcon
            href="https://www.google.com/search?q=pizza+noastra&rlz=1C5CHFA_enRO969RO969&oq=pizza+noastra&aqs=chrome..69i57j69i59l2j69i60l3.1567j0j1&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMwysTTKrsyxeMRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18uxi4vfJT07MCcjPDEoty0wtL17EKlqQWVWVqJCXn1hcUpSoUAQRBwCS_8V0dgAAAA"
            target="_blank"
          >
            <Image src={googleImg} width={52} alt="Google+ Icon" height={52} />
          </SocialIcon>
          <SocialIcon
            href="https://www.tiktok.com/@pizzanoastra"
            target="_blank"
          >
            <Image src={tikTokImg} width={55} alt="TikTok Icon" height={55} />
          </SocialIcon>
        </SocialContainer>
      </AfterContainer>
    ) : (
      <BeforeContainer>
        <OrderSummary />
        <OrdersDescription>
          Pentru a putea realiza comanda online, completati formularul de mai
          jos.
          <span>Comanda se va realiza cash la livrare.</span>
          <span
            style={{
              fontSize: "0.7rem",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          >
            * Comenzile sub 50 de lei inafara Ghiorocului sau Cuvinului vor avea
            o taxa de transport de 10 lei.
          </span>
        </OrdersDescription>
        <OrdersForm />
      </BeforeContainer>
    );
  return (
    <OrderContainer open={open}>
      <OrdersCloseButton onClick={() => setOpen(!open)}>
        <div />
        <div />
      </OrdersCloseButton>
      <OrdersTitle>COMANDA</OrdersTitle>
      {renderOrderStatus()}
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: auto;
  padding: 20px;
  position: fixed;
  overflow: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
  transition: transform 0.3s ease-in-out;
  transform: ${(props: Props) =>
    props.open ? "translateX(0)" : "translateX(100%)"};
  @media screen and (min-width: 768px) {
    padding-left: 25vw;
    padding-right: 25vw;
  }
  @media screen and (min-width: 1024px) {
    padding: 20px;
    width: 35vw;
    background: rgba(0, 0, 0, 0.8);
  }
  @media screen and (min-width: 1440px) {
    width: 25vw;
    text-align: left;
  }
`;

const BeforeContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
`;
const AfterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialContainer = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  margin-top: 15px;
  align-items: center;
`;

const SocialIcon = styled.a`
  margin-left: 1.5rem;
  :first-child {
    margin-left: 0;
  }
`;

const OrdersTitle = styled(Title)`
  font-size: 22px;
  color: #fc5775;
  margin-bottom: 0;
`;
const OrdersDescription = styled.p`
  font-size: 0.9em;
  font-family: "Besley-New";
  background: rgba(0, 0, 0, 0.5);
  color: white;
  span {
    display: block;
    color: #fc5775;
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const OrdersSucessDescription = styled(OrdersDescription)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const OrdersCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  > div {
    width: 1.7rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    position: relative;
    transform-origin: 4px;

    :first-child {
      transform: rotate(45deg);
    }
    :nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;
export default Order;
