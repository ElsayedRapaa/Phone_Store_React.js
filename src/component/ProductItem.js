import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductAPI from "./Data/DataAPI";

const ProductItem = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductAPI.getData()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error Not Found From Component Products Line Get Data");
      });
  });

  if (loading) {
    return <h2 className="pb-3 text-black-50">Loading...</h2>;
  }

  return (
    <div className="row">
      {data.map((item) => (
        <div className="card col-md-4 col-lg-3 py-2" key={item.id}>
          <img src={"../" + item.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">${item.price}</p>
            <Link to={"/products/" + item.id} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
