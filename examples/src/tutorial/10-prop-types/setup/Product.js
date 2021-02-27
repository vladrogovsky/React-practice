import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  const imageUrl = image ? image.url : defaultImage;
  return (
    <article className="product">
      <img src={imageUrl} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
Product.defaultProps = {
  name: "no name",
  price: "3.99",
};
export default Product;
