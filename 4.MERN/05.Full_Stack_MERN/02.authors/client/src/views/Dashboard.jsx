import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [authors, setAuthors] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err));
  }, [state]);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/${id}`)
      .then((res) => setState(!state))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column gap-3 align-items-start">
      <Link to={"/new"} className="btn btn-primary">
        Add an author
      </Link>
      <h4>We have quotes by:</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions avaliable</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx) => {
            return (
              <tr key={idx} scope="row">
                <td> {author.name}</td>
                <td>
                  <Link
                    to={`/edit/${author._id}`}
                    className="btn btn-primary"
                    style={{ "margin-right": "5px" }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteHandler(author._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
