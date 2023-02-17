import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedCategories = persistReducer(persistConfig, categoriesReducer);
const persistedCart = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: persistedCategories,
    cart: persistedCart,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
