import { configureStore } from "@reduxjs/toolkit";
import storeCart from "./features/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, storeCart);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);
