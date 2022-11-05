import React from "react";
import { useParams } from "react-router";


const Planeta = () => {
    const [planeta, setPlaneta] = useState([]);
    
    const {id} = useParams();


    
    useEffect(() => {
  
      const getPlaneta = () => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => response.json())
          .then((data) => setPlaneta(data.results))
  
      }
      getPlaneta();
  
    }, []);
  
   return planeta.map((planeta) => {
     return (  

          <div className="container-fluid d-flex mt-2 justify-content-center"
              key={persona.id}>
                  <div className="card card-info" style={{ width: 18 + "rem" }}>
                  <img src={"https://starwars-visualguide.com/assets/img/characters/" + personas.id + ".jpg"} className="card-img-top" alt="..." />
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
    
  export default Planeta;