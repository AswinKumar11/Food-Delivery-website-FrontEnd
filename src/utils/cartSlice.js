import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items.length == 0) {
        action.payload.quantity = 1;
        action.payload.cost =
          typeof action.payload.price !== "undefined"
            ? action.payload.price / 100
            : action.payload.defaultPrice / 100;
        state.items.push(action.payload);
      } else {
        let abc = state.items.find((e) => e.id == action.payload.id);
        if (typeof abc !== "undefined" && abc.id !== "undefined") {
          state.items.map((e) => {
            if (e.id == action.payload.id) {
              e.quantity += 1;
              e.cost =
                typeof e.price !== "undefined"
                  ? (e.price / 100) * e.quantity
                  : (e.defaultPrice / 100) * e.quantity;
            }
          });
        } else {
          action.payload.quantity = 1;
          action.payload.cost =
            typeof action.payload.price !== "undefined"
              ? action.payload.price / 100
              : action.payload.defaultPrice / 100;
          state.items.push(action.payload);
        }
      }
      //   console.log(current(state));
    },
    removeItem: (state, action) => {
      state.items.map((e) => {
        if (e.id == action.payload.id) {
          if (e.quantity > 1) {
            e.quantity -= 1;
            e.cost = typeof e.price !== "undefined"
              ? e.cost - e.price / 100
              : e.cost - e.defaultPrice / 100;
          } else {
            state.items = state.items.filter((e) => e.id !== action.payload.id);
          }
        }
      });
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
