
import styled from "@emotion/styled";

import Cards from "./Cards";
import useFilter from "../hooks/useFilter";
import { Container } from "react-bootstrap";

//import allproducts from "../data/products";

const Section = styled.section`
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap:5px;
  grid-template-rows: auto;
 
`

const Cataloge = ({ refCategory, handleClick }) => {
  const productosFiltrados = useFilter(refCategory);
  return (
   <Container>
     <Section>
            {productosFiltrados.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick}/>
            ))}
      </Section>

   </Container>
  );
};

export default Cataloge;