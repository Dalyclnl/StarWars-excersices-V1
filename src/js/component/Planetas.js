import React, { useEffect, useState } from "react";

const Planetas = () => {
  const [planeta, setPlaneta] = useState([]);

  useEffect(() => {

    const getPlaneta = () => {
      fetch("https://www.swapi.tech/api/planets/")
        .then((response) => response.json())
        .then((data) => setPlaneta(data.results))

    }
    getPlaneta();

  }, []);

  return planeta.map((planeta) => {
    return (
        <div className="container-fluid d-flex mt-2 "
            key={planeta.uid}>
            <div className="card card-info" style={{ width: 18 + "rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body border">
                <h5 className="card-title fs-3">{planeta.name} </h5>
                <p>{planeta.orbital_period} </p>
                <p>{planeta.population} </p>
                <p>{planeta.diameter} </p>
                <div className="d-flex justufy-content-between">  
                </div>
            </div>
            </div>
        </div>
    );
  });
};

export default Planetas;