import React, { createContext, useContext, useState, ReactNode } from "react";

export type Item = {
  id: string;
  description: string;
  value: number;
  date: string;
  type: "gastos" | "ganhos";
};

type MoneyFlowContextType = {
  items: Item[];
  addItem: (item: Omit<Item, "id">) => void;
  maskDate: (value: string) => string;
  maskCurrency: (value: number) => string;
};

const MoneyFlowContext = createContext<MoneyFlowContextType>({
  items: [],
  addItem: () => {},
  maskDate: (value: string) => value,
  maskCurrency: (value: number) => value.toString(),
});

export function MoneyFlowProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(item: Omit<Item, "id">) {
    const newItem: Item = { ...item, id: String(Date.now()) };
    setItems((prev) => [...prev, newItem]);
  }
  
  const maskDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
  
    let masked = cleaned;
  
    if (cleaned.length <= 2) {
      masked = cleaned;
    } else if (cleaned.length <= 4) {
      masked = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else {
      masked = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    }
  
    return masked;
  };
  
  const maskCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  

  return (
    <MoneyFlowContext.Provider value={{ items, addItem, maskDate, maskCurrency }}>
      {children}
    </MoneyFlowContext.Provider>
  );
}

export function useMoneyFlow() {
  return useContext(MoneyFlowContext);
}
