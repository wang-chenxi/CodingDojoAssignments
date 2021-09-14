import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [productState, setProductState] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${id}`)
      .then((res) => setProductState(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {productState ? (
        <div>
          <h1>{productState.title}</h1>
          <h3>Price: $ {productState.price}.00</h3>
          <h3>Description: {productState.description}</h3>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
      <br />
      <Link to={"/"} className="btn btn-primary">
        Back to dashboard
      </Link>
    </>
  );
};

export default Details;
