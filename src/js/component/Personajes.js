import React, { useEffect, useState } from "react";

const Personajes = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {

    const getPersonaje = () => {
      fetch("https://www.swapi.tech/api/people/")
        .then((response) => response.json())
        .then((data) => setPersonas(data.results))

    }
    getPersonaje();

  }, []);

 return personas.map((persona) => {
   return (  
        <div className="container-fluid d-flex mt-2 justify-content-center"
            key={persona.id}>
                <div className="card card-info" style={{ width: 18 + "rem" }}>
                 <img src={"https://starwars-visualguide.com/assets/img/characters/" + "{persona.id}" + ".jpg"}  className="card-img-top" alt="..." />
                  <div className="card-body border">
                    <h5 className="card-title fs-3">{persona.name} </h5>
                    <a href="#" class="card-link">Card link</a>
                     <a href="#" class="card-link"></a>
                    <div className="d-flex justufy-content-between">  
                    </div>
                  </div>
                </div>
        </div>
      );
    });
  };
  
export default Personajes;
