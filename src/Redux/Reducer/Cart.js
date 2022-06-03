import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

import { Commonfc } from "../../Ultis/Commonfunction";

export const cartSlice = createSlice({
  name: "cartReducer",

  //Save items when click add button  just take Picture ,price  and more data is  value
  // exp  [ items1:{picture:"",name:"",price,value},items2:{picture:"",name:"",price,value}]
  // delivery is information delivery if
  initialState: {
    items: [],
    valueitems: 0,
    totalamount: 0,
  },

  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
      //plus  value

      state.items.map((item, indx) => {
        if (item.key == action.payload.key) {
          item.value++;
        }
      });

      if (state.items.length > 0) {
        const removedup = Commonfc.removeDuplicate(state.items, "key");

        state.items = [...removedup];
      }
    },

    // increaseItem: (state, action) => {
    //   state.items.map((item, indx) => {
    //     if (item.key == action.payload.key) item.value++;
    //   });

    // },

    // decreaseItem: (state, action) => {
    //   state.items.map((item, indx) => {
    //     if (item.key === action.payload.key) {
    //       if (item.value > 1) item.value--;
    //     }
    //   });
    // },

    //Get action index to remove
    removeItem: (state, action) => {
      state.items = state.items.filter((item, indx) => {
        return item.key != action.payload.key;
      });
    },
  },
});

//Action
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
