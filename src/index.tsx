import React from "react";
import ReactDOM from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";
import App from "./App";

import "./index.scss";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
