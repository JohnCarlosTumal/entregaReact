import React, {createContext, useState} from 'react'

export const CartContext = React.createContext()

export const CartProvedor = ({children}) => {

    const[state, setState] = useState(0)

  return (
    <CartContext.Provider value={[state, setState]}>
        {children}
        </CartContext.Provider> //proveedor
  )
}

