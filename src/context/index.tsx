import React, { createContext, useState, useEffect, Context } from "react";

type ContextType = {
   publishProduct:  () => Promise<void>
   buyProduct: () => Promise<void>
   product: never[]
}


const StateContext = createContext<null | ContextType>(null)

type Props = {
  children: React.ReactNode
}

export const StateProvider = ({children}: Props) => {
  const [product, setProducts] = useState([])
  const publishProduct = async()=> {}

  const buyProduct = async()=> {}

  return (
    <StateContext.Provider value={{
      publishProduct,
      buyProduct,
      product
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext);