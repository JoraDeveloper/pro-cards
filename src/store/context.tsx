import React, { useContext } from "react";

type StoreType = undefined | null;

const StoreContext = React.createContext<StoreType | null>(null);

interface StoreProviderProps {
  store: StoreType;
  children: React.ReactNode;
}

export function StoreProvider({ children, store }: StoreProviderProps) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStore<Result>(selector?: (store: StoreType) => Result) {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("Нельзя использовать useStore вне StoreProvider");
  }

  if (typeof selector === "function") {
    return selector(store);
  }

  return store;
}
