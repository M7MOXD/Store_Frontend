import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProd: (state, action) => {
      if (state.value.find((x) => x.id === action.payload.id)) {
        state.value = state.value.filter((prod) => {
          if (prod.id === action.payload.id) {
            prod.quantity += 1;
            return prod;
          } else {
            return prod;
          }
        });
      } else {
        state.value.push(action.payload);
      }
    },
    rmProd: (state, action) => {
      state.value = state.value.filter((prod) => prod.id !== action.payload.id);
    },
    reduceAmount: (state, action) => {
      state.value = state.value.filter((prod) => {
        if (prod.id === action.payload.id) {
          if (action.payload.quantity > 1) {
            prod.quantity -= 1;
            return prod;
          } else {
            return false;
          }
        } else {
          return prod;
        }
      });
    },
    cleanCart: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProd, rmProd, reduceAmount, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
