import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import { CartRoute } from "./routes/cart/components/CartRoute/CartRoute";
import { ProductDetailsRoute } from "./routes/details/components/ProductDetailsRoute/ProductDetailsRoute";
import { HomeRoute } from "./routes/home/components/HomeRoute/HomeRoute";
import { Navbar } from "./shared/components/Navbar/Navbar";
import React, { FC, useEffect } from "react";
import { fetchProductsList } from "./app/state/slices/product.slice";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/details/:id">
          <ProductDetailsRoute />
        </Route>
        <Route path="/cart">
          <CartRoute />
        </Route>
        <Route path="/">
          <HomeRoute />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
