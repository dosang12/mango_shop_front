import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./MainPage.css";
import axios from "axios";
import ProductsPage from "./ProductsPage";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = "https://d61fb4ea-8d46-4be4-b5aa-c8563d8f140b.mock.pstmn.io/products";
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(products);
      });
  }, []);
  return (
    <div>
      <div id="body">
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                <Link className="product-link" to={`/ProductsPage/${product.id}`}>
                  <div>
                    <img className="product-img" src={product.imageUrl} alt="product.imageUrl" />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <img src="./images/images/icons/avatar.png" alt="product-avatar" className="product-avatar" />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
