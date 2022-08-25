import React, { useState } from "react";
import axios from "axios";

const Input = () => {
  const [image, setImage] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=YIIvX7SxHqEim_sZSyvjmZryOCzTsvVJOuzi9RpJcKg`
      )
      .then((response) => {
        setResult(response.data.results);
      });
  };
  return (
    <>
      <div className="container text-center my-3">
        <h1 className="display-6">Image App</h1>
        <input
          type="text"
          placeholder="Search...."
          className="form-control"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-danger my-3"
          onClick={changePhoto}
        >
          Search
        </button>
      </div>
      <div className="container">
        <div className="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div className="col-lg-4 col-md-4 col-6">
                <a href="!#" className="d-block mb-4 h-100">
                  <img
                    src={value.urls.small}
                    className="img-fluid img-thumbnail"
                    alt={image}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Input;
