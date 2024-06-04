"use client";

import { useState } from "react";
import { ProductContext } from "../context";

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ProductContext.Provider
      value={{ product, setProduct, searchTerm, setSearchTerm }}
    >
      {children}
    </ProductContext.Provider>
  );
}
