"use client";

import { useState } from "react";
import { CheckoutContext } from "../context";

export default function CheckoutProvider({ children }) {
  const [checkoutInfo, setCheckoutInfo] = useState({
    firstName: "",
    lastName: "",
    company: "",
    region: "",
    street_address: "",
    city: "",
    contact: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  return (
    <CheckoutContext.Provider
      value={{ checkoutInfo, setCheckoutInfo, errors, setErrors }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
