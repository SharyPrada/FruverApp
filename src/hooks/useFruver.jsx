//Custom hooks
import { useContext } from "react";
import FruverContext from "../context/FruverProvider";

const useFruver = () => {
  return useContext(FruverContext)
  
}

export default useFruver
