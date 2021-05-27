import { useEffect, useState } from 'react';
import environment from '../util/environment';
import axios from 'axios';
import { ProductInterface } from '../config/types';

//Responsive design
export const useScreenSizes = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let isMobile: boolean = width < 768;
  let isTablet: boolean = width >= 768 && width <= 1023;
  let isDesktop: boolean = width > 1023;

  return { isMobile, isTablet, isDesktop };
};

export const useResponsiveStyle = (val: any[] | any | undefined) => {
  const { isMobile } = useScreenSizes();
  if (!val) {
    return null;
  }
  return Array.isArray(val) ? (isMobile ? val[0] : val[1]) : val;
};

//Products
export const useGetProducts = () => {
  const path = environment.db_URL + '/products/';
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [products, setProducts] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    !completed &&
      axios
        .get(path)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
          setCompleted(true);
        })
        .catch((err) => setError(err));
  }, []);

  return { products, loading, completed, error };
};

export const useGetProductById = (id: string) => {
  const path = environment.db_URL + '/products/' + id;
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [product, setProduct] = useState<ProductInterface>();

  useEffect(() => {
    axios
      .get(path)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
        setCompleted(true);
        return { product, loading, completed };
      })
      .catch((err) => console.log(err));
  }, [id]);

  return { product, loading, completed };
};
