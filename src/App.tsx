import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { CartRoute } from './routes/cart/components/CartRoute/CartRoute';
import { ProductDetailsRoute } from './routes/details/components/ProductDetailsRoute/ProductDetailsRoute';
import { HomeRoute } from './routes/home/components/HomeRoute/HomeRoute';
import { Navbar } from './shared/components/Navbar/Navbar';

function App() {
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
}

export default App;
