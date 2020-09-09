import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import GradeSharp from "@material-ui/icons/GradeSharp";
import StarBorderSharpIcon from "@material-ui/icons/StarBorderSharp";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <GradeSharp />
              </p>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarBorderSharpIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
