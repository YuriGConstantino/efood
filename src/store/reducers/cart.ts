import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  openCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  openCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    checkout: (state) => {
      state.openCheckout = false
    }
  }
})

export const { add, remove, open, close, checkout } = cartSlice.actions

export default cartSlice.reducer
