import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    !products.data && dispatch(getProducts());
  }, []);

  return (
    <>
      <Header />
      {!products.data || loading ? (
        <div>loading</div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {products.data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;