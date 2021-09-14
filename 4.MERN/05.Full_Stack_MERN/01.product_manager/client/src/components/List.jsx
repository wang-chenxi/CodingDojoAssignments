import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [products, setProducts] = useState([]);
  //the state is used to manully update the useEffect in the second params
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [state]);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/${id}`)
      .then((res) => setState(!state))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul className="table">
        {products.map((product, idx) => {
          return (
            <tr key={idx}>
              <td>
                {" "}
                <Link to={`/${product._id}`}>{product.title}</Link>
              </td>
              <td>
                {" "}
                <button
                  onClick={() => deleteHandler(product._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
