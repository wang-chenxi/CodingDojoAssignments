import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, idx) => {
          return (
            <li key={idx}>
              <Link to={`/${product._id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
