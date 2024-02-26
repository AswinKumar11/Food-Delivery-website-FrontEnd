import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartQuantity:0,
    resId:0
  },
  reducers: {
    addItem: (state, action) => {
      const{resId,cardData} = action.payload;
      console.log(action.payload);
      state.cartQuantity += 1; 
      if (state.items.length == 0) {
        state.resId = resId;
        cardData.quantity = 1;
        cardData.cost =
          typeof cardData.price !== "undefined"
            ? cardData.price / 100
            : cardData.defaultPrice / 100;
        state.items.push(cardData);
      } else {
        let abc = state.items.find((e) => e.id == cardData.id);
        if (typeof abc !== "undefined" && abc.id !== "undefined") {
          state.items.map((e) => {
            if (e.id == cardData.id) {
              e.quantity += 1;
              e.cost =
                typeof e.price !== "undefined"
                  ? (e.price / 100) * e.quantity
                  : (e.defaultPrice / 100) * e.quantity;
            }
          });
        } else {
          cardData.quantity = 1;
          cardData.cost =
            typeof cardData.price !== "undefined"
              ? cardData.price / 100
              : cardData.defaultPrice / 100;
          state.items.push(cardData);
        }
      }
        // console.log(current(state));
    },
    removeItem: (state, action) => {
      const cardData = action.payload;
      state.cartQuantity -= 1;
      state.items.map((e) => {
        if (e.id == cardData.id) {
          if (e.quantity > 1) {
            e.quantity -= 1;
            e.cost = typeof e.price !== "undefined"
              ? e.cost - e.price / 100
              : e.cost - e.defaultPrice / 100;
          } else {
            state.items = state.items.filter((e) => e.id !== cardData.id);
            if(state.items.length === 0) state.resId = 0;
          }
        }
      });
    },
    clearCart: (state) => {
      state.cartQuantity = 0;
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
