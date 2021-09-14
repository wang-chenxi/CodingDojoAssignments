import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = ({ products, onDeleteProduct }) => {
  // the list component only consider about list rendering
  return (
    <div>
      <h1>Product List</h1>
      <ul className="table">
        {products.map((product, idx) => {
          return (
            <tr key={idx}>
              <td>
                <Link to={`/${product._id}`}>{product.title}</Link>
              </td>
              <td>
                <button
                  onClick={() => onDeleteProduct(product._id)}
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
