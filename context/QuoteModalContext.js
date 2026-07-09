"use client";

import { createContext, useContext, useState } from "react";

const QuoteModalContext = createContext();

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(""); // ✅ naya

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, setIsOpen, selectedProduct, setSelectedProduct }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}