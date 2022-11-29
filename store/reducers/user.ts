import { remove } from "lodash";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductType = {
  idProduct: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
};


interface UserSliceTypes {
  user: any;
  favProducts: any;
}

const initialState = {
  user: {
    idUser: "",
    name: "",
    email: "",
    idRol: "",
    token: "",
  },
  favProducts: [],
} as UserSliceTypes;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action) {
      state.user.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = {};
    },
    toggleFavProduct(state, action: PayloadAction<any>) {
      const index = state.favProducts.includes(action.payload.idProduct);

      if (!index) {
        state.favProducts.push(action.payload.idProduct);

        return;
      }

      remove(
        state.favProducts,
        (idProduct) => idProduct === action.payload.idProduct
      );
    },
    setUserLogged(state, action: PayloadAction<ProductType>) {
      const index = state.favProducts.includes(action.payload.idProduct);

      if (!index) {
        state.favProducts.push(action.payload.idProduct);

        return {
          ...state,
          favProducts: state.favProducts,
        };
      }

      remove(
        state.favProducts,
        (idProduct) => idProduct === action.payload.idProduct
      );

      return {
        ...state,
        favProducts: state.favProducts,
      };
    },
  },
});

export const {
  toggleFavProduct,
  setUserLogged,
  setToken,
  setUser,
  logoutUser,
} = userSlice.actions;
export default userSlice.reducer;
