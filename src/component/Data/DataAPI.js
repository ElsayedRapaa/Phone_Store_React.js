import { storeProducts } from "./Data";

const getData = () => {
  const Products = Promise.resolve(storeProducts);
  return Products;
};

const getById = (id) => {
  const Products = storeProducts.find((item) => item.id === id);
  return Promise.resolve(Products);
};

export default { getData, getById };
