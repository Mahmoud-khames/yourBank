import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


const rootReducer =combineReducers({
  auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  
});

export const persistor = persistStore(store);
