import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducer from "./reducers";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  });
}
