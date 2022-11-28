import {useEffect, useState} from 'react'
import CardsApi from "./CardsApi";

import styled from "@emotion/styled";

const Section = styled.section`
  padding-left: 45px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-template-rows: auto;
  row-gap:5px;
 
`

const ApiConection = () => {

  const [cocktails, setCocktail] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      //console.log(resultado)

      if(cocktails.length === 0){
        const arrayDrinks = resultado.drinks.map(bebida => {
          const objeto = {
            id: bebida.idDrink,
            name: bebida.strDrink,
            photo: bebida.strDrinkThumb,
          }
          return objeto
        })
        setCocktail(arrayDrinks);
      }
    }
    consultarAPI();
  }, [])

  //console.log(cocktails)

  return (
     <>
        <Section>
          {cocktails.map((item) => (
              <CardsApi key={item.id} item={item} />
            ))}
        </Section>
     </>
    
  );
};

export default ApiConection