import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch({ type: "set_product", payload: product })
    navigate(`/products/${product.id}`)
  }

  return (
    <div className="col" onClick={onPress}>
      <div className="card">
        <img src={product.images[0]} className="card-img-top" alt="Avatar"></img>
        <div className="card-body">
          <h5 className="card-title">{`${product.brand} - ${product.model}` }</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Color {product.color.name}</li>
          <li className="list-group-item">${product.price}</li>
          <li className="list-group-item">
            Fecha de lanzamiento: {product.date_launch}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
