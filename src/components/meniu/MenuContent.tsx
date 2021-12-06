import styled from "styled-components";
import { products, extras } from "../../data";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import ExtrasCrispy from "./products/extras/ExtrasCrispy";
import Pizza from "./products/Pizza";
import Crispy from "./products/Crispy";
import Burger from "./products/Burger";
import Salad from "./products/Salad";
import ExtrasPizza from "./products/extras/ExtrasPizza";
import Modal from "../modal/Modal";

function MenuContent({ products, categories }) {
  // Initial state for filters
  const NULL_MF = {
    pizza: false,
    crispy: false,
    burger: false,
    salad: false,
  };

  const NULL_SF = {
    porc: false,
    pui: false,
    peste: false,
    vegeterian: false,
  };

  // Type of the component
  const [componentType, setComponentType] = useState("");

  // Boolean for detecting when clicking each filter
  const [clickedMF, setClickedMF] = useState(NULL_MF);
  const [clickedSF, setClickedSF] = useState(NULL_SF);

  // Render functions for products and secondary filters
  const renderSF = () => {
    switch (componentType) {
      case "pizza":
        return (
          <SecondaryFilter>
            {categories.pizza.map((category, index) => (
              <button
                onClick={secondaryFilterHandler}
                className={`${
                  index === 0 ? "first" : index === 3 ? "last" : null
                } ${clickedSF[category] ? "active" : null}`}
                key={category}
                id={category}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </SecondaryFilter>
        );
      case "crispy":
      case "burger":
        return (
          <SecondaryFilter>
            {categories.crispy.map((category, index) => (
              <button
                onClick={secondaryFilterHandler}
                className={`${
                  index === 0 ? "first" : index === 1 ? "last" : null
                } ${clickedSF[category] ? "active" : null}`}
                key={category}
                id={category}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </SecondaryFilter>
        );
      case "salad":
        return (
          <SecondaryFilter>
            {categories.salad.map((category, index) => (
              <button
                key={category}
                onClick={secondaryFilterHandler}
                className={`${
                  index === 0 ? "first" : index === 2 ? "last" : null
                } ${clickedSF[category] ? "active" : null}`}
                id={category}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </SecondaryFilter>
        );
      default:
        break;
    }
  };

  const renderProduct = {
    // eslint-disable-next-line react/display-name
    pizza: (product) => (
      <Pizza
        key={product.id}
        id={product.id}
        title={product.title}
        ingredients={product.ingredients}
        mediumGr={product.mediumGrams}
        largeGr={product.largeGrams}
        mediumPrice={product.mediumPrice}
        largePrice={product.largePrice}
        productType={product.type}
        type={product.categories}
      />
    ),
    // eslint-disable-next-line react/display-name
    crispy: (product) => (
      <Crispy
        key={product.id}
        id={product.id}
        title={product.title}
        imgSrc={product.img}
        ingredient1={product.ingredient1}
        weight1={product.weight1}
        ingredient2={product.ingredient2}
        weight2={product.weight2}
        price={product.price}
        extra={product.extra}
        type={product.categories}
        productType={product.type}
        bucket={product.bucket}
      />
    ),
    // eslint-disable-next-line react/display-name
    burger: (product) => (
      <Burger
        key={product.id}
        id={product.id}
        title={product.title}
        ingredients={product.ingredients}
        price={product.price}
        type={product.categories}
        productType={product.type}
      />
    ),
    // eslint-disable-next-line react/display-name
    salad: (product) => (
      <Salad
        key={product.id}
        id={product.id}
        title={product.title}
        ingredients={product.ingredients}
        price={product.price}
        type={product.categories}
        productType={product.type}
      />
    ),
  };

  // Product/Products related code
  const [menuProducts, setMenuProducts] = useState([]);

  //Shuffle products function
  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const getAllProducts = () => {
    let tempArr = [];
    products.forEach((product) => {
      switch (product.type) {
        case "pizza":
          tempArr.push(renderProduct.pizza(product));
          break;
        case "crispy":
          tempArr.push(renderProduct.crispy(product));
          break;
        case "burger":
          tempArr.push(renderProduct.burger(product));
          break;
        case "salad":
          tempArr.push(renderProduct.salad(product));
          break;
        default:
          break;
      }
    });
    return shuffle(tempArr);
  };

  //all products
  const allProducts = getAllProducts();

  const [currentProducts, setCurrentProducts] = useState([]);

  // Filters Handlers
  const mainFilterHandler = (event) => {
    let cType = event.target.id;
    if (clickedMF[cType]) {
      setMenuProducts(allProducts);
      setClickedMF(NULL_MF);
      setClickedSF(null);
    } else {
      setComponentType(cType);
      setMenuProducts(
        allProducts.filter(
          (product) => product.props.productType.toLowerCase() === cType
        )
      );
      setCurrentProducts(
        allProducts.filter(
          (product) => product.props.productType.toLowerCase() === cType
        )
      );
      setClickedMF({ ...NULL_MF, [cType]: !clickedMF[cType] });
      setClickedSF(NULL_SF);
    }
  };

  const secondaryFilterHandler = (event) => {
    let cType = event.target.id;
    if (clickedSF[cType]) {
      setClickedSF(NULL_SF);
      setMenuProducts(currentProducts);
    } else {
      setMenuProducts(
        currentProducts.filter((product) => {
          return product.props.type[cType];
        })
      );
      setClickedSF({ ...NULL_SF, [cType]: true });
    }
  };

  useEffect(() => {
    setMenuProducts(allProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>MENIU</Title>
      <Filters>
        <MainFilter>
          <button
            className={`first ${clickedMF.pizza ? "active" : null}`}
            id="pizza"
            onClick={mainFilterHandler}
          >
            PIZZA
          </button>
          <button
            className={clickedMF.crispy ? "active" : null}
            id="crispy"
            onClick={mainFilterHandler}
          >
            CRISPY
          </button>
          <button
            className={clickedMF.burger ? "active" : null}
            id="burger"
            onClick={mainFilterHandler}
          >
            BURGER
          </button>
          <button
            className={`last ${clickedMF.salad ? "active" : null}`}
            id="salad"
            onClick={mainFilterHandler}
          >
            SALATA
          </button>
        </MainFilter>
        {clickedSF && renderSF()}
      </Filters>
      <ProductsContainer>{menuProducts.map((el) => el)}</ProductsContainer>
      <ExtrasCrispy extras={extras} />
      <ExtrasPizza extras={extras} />
      <Footer />
      <Modal />
    </Container>
  );
}

export default MenuContent;

export async function getStaticProps() {
  return {
    props: {
      productsList: products,
    },
    revalidate: 1,
  };
}

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding-top: 130px;
  }
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  color: #fc5775;
  font-family: "Astron";
  letter-spacing: 2px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 75px;
  margin: 5px auto;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: 425px) {
    height: 80px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
    height: 90px;
  }
`;

const MainFilter = styled.div`
  display: flex;

  button {
    color: white;
    border: 2px solid rgba(252, 87, 117, 0.6);
    background: none;
    font-size: 12px;
    font-family: "Astron";
    padding: 8px;

    @media only screen and (min-width: 425px) {
      font-size: 14px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 17px;
      padding: 10px;
    }
  }
  .active {
    border-color: rgba(252, 87, 117, 1);
    color: #fc5775;
  }

  .first {
    border-radius: 0px 0px 0px 17px;
  }

  .last {
    border-radius: 0px 0px 17px 0px;
  }
`;

const SecondaryFilter = styled.div`
  display: flex;

  button {
    color: white;
    border: 2px solid rgba(252, 87, 117, 0.6);
    background: none;
    font-size: 10px;
    font-family: "Astron";
    padding: 7px;

    @media only screen and (min-width: 425px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 15px;
    }
  }

  .active {
    border-color: rgba(252, 87, 117, 1);
    color: #fc5775;
  }

  .first {
    border-radius: 17px 0px 0px 0px;
  }

  .last {
    border-radius: 0px 17px 0px 0px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    width: 95%;
  }

  @media only screen and (min-width: 1024px) {
    width: 83%;
  }
`;
