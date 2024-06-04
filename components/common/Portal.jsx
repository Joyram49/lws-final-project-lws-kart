"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, destination }) => {
  const mountElement = document.getElementById(destination ?? "root");
  const elementDiv = document.createElement("div");
  elementDiv.classList.add("w-full", "h-full", "absolute", "inset-0", "z-10");

  useEffect(() => {
    mountElement.appendChild(elementDiv);

    return () => mountElement.removeChild(elementDiv);
  }, [elementDiv, mountElement]);

  return createPortal(children, elementDiv);
};

export default Portal;
