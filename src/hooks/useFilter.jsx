import { useState, useEffect, useMemo } from 'react';
//import allproducts from "../data/products";
import localproducts from "../data/localproducts";

const useFilter = (pageRef) => {
  const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    if(productList.length === 0){
      setProductList(localproducts);
    } else {
      setSelectedCategory(pageRef);
    }
    
  }, [productList]);

  function getFilteredList() {
     // Avoid filter when selectedCategory is null
     if (!selectedCategory) {
      return productList;
     }
    return productList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [{pageRef}, productList]);

  return filteredList
}

export default useFilter