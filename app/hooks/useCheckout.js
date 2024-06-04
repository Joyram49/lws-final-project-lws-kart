import { useContext } from "react";
import { CheckoutContext } from "../context";

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
