import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProduct } from "../actions/productActions";
import Header from "../components/Header";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { product, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    !product?.id && dispatch(getProduct(id));
  }, []);

  return (
    <>
      <Header />
      {!product?.id || loading ? (
        <div>loading</div>
      ) : (
        <div className="row">
            {product.brand}
        </div>
      )}
    </>
  );
}

export default ProductDetail;