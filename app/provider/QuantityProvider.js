"use client";

import { useState } from "react";
import { QuantityContext } from "../context";

export default function QuantityProvider({ children }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
}
