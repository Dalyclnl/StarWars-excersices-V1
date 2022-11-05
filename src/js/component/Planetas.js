import React, { useEffect, useState } from "react";

const Lugar = () => {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {

    const getLugar = () => {
      fetch("https://www.swapi.tech/api/planets/")
        .then((response) => response.json())
        .then((data) => setPlanetas(data.results))

    }
    getLugar();

  }, []);

  return planetas.map((planeta) => {
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