import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'
import { productData } from '../../content'

export interface CounterState {
  value: Product[]
  originalValue: Product[]
}

const initialState: CounterState = {
  value: productData,
  originalValue: productData,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((product) => product.name !== action.payload)
    },

    searchProduct: (state, action: PayloadAction<string>) => {
      state.value = state.originalValue.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()))
    },

    filterProductByCategory: (state, action: PayloadAction<string>) => {
      state.value = state.originalValue.filter((product) => product.category === action.payload)
    },

    filterProductByYear: (state, action: PayloadAction<string>) => {
      state.value = state.originalValue.filter((product) => product.year === action.payload)
    },

    reset: (state) => {
      state.value = state.originalValue
    },

  },
})

// Action creators are generated for each case reducer function
export const { deleteProduct, searchProduct, filterProductByCategory, filterProductByYear, reset } = counterSlice.actions

export default counterSlice.reducer