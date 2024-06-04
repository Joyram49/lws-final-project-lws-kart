import { useContext } from "react";
import { QuantityContext } from "../context";

export const useQuantity = () => {
  return useContext(QuantityContext);
};
