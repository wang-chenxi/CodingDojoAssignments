import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import List from "../components/List";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const onCreateNewProduct = (newProduct) => {
    return axios
      .post("http://localhost:8000/api/products", newProduct)
      .then((res) => {
        setProducts((prev) => prev.concat(res.data));
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/${id}`)
      .then((res) => setProducts((prev) => prev.filter((p) => p._id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column gap-5">
      <h1>Product Manager</h1>
      <Form onCreateNewProduct={onCreateNewProduct} />
      <List products={products} onDeleteProduct={onDeleteProduct} />
    </div>
  );
};

export default Dashboard;
