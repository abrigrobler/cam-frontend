// eslint-disable-next-line
import './App.css';
import React, { useEffect, useState } from 'react';
import LandingPage from './pages';
import ProductCategoryPage from './pages/product-category';
import StoryPage from './pages/story';
import ProductDetailsPage from './pages/product-details';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/navbar';
import environment from './util/environment';
import CamaliaLogo from './resources/images/logo_512.png';
import axios from 'axios';
import { ProductInterface } from './config/types';
import Footer from './components/footer';
import { useGetProducts } from './hooks';
import { productCategories } from './config/types';
import { Flex } from './components/layout';

//TODO: Add a 404 not found page
//TODO: Prepare for the case where a user tries to access an undefined route

function App() {
  const [products, SetProducts] = useState<ProductInterface[]>([]);

  const {
    products: incomingProducts,
    loading,
    completed,
    error,
  } = useGetProducts();

  useEffect(() => {
    if (!loading && completed && incomingProducts) {
      SetProducts(incomingProducts);
    }
    if (error) {
      console.log(error);
    }
  }, [loading, completed, incomingProducts, products]);

  return (
    <div className="App">
      <Router>
        <Navbar
          logo={CamaliaLogo}
          alt="camalia logo"
          hasShadow
          productCategories={productCategories}
        />
        <Flex flexDirection="column" style={{ flex: '1 0 auto' }}>
          <Switch>
            <Route exact path="/">
              <LandingPage
                products={products}
                productCategories={productCategories}
              />
            </Route>
            <Route path={'/categories/:category'}>
              <ProductCategoryPage products={products} />
            </Route>
            <Route path={'/products/:productId'}>
              <ProductDetailsPage />
            </Route>
            <Route exact path="/story">
              <StoryPage />
            </Route>
            {/*TODO: Be sure to create this page later */}
            <Route exact path="/404" component={LandingPage} />
          </Switch>
        </Flex>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
