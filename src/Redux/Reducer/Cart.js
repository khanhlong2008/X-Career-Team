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
    totalamount: 0,
  },

  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
      state.totalamount += action.payload.price;
     
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
        return indx != action.payload;
      });
    },
  },
});

//Action
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;