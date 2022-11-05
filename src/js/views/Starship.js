import React from "react";
import { useParams } from "react-router";

const Starship = () => {
    const [nave, setNave] = useState([]);
    
    const {id} = useParams();


    
    useEffect(() => {
  
      const getStarship= () => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
          .then((response) => response.json())
          .then((data) => setNave(data.results))
  
      }
      getStarship();
  
    }, []);
  
   return nave.map((nave) => {
     return (  

          <div className="container-fluid d-flex mt-2 justify-content-center"
              key={nave.id}>
                  <div className="card card-info" style={{ width: 18 + "rem" }}>
                  <img src={"https://starwars-visualguide.com/assets/img/characters/" + personas.id + ".jpg"} className="card-img-top" alt="..." />
                    <div className="card-body border">
                      <h5 className="card-title fs-3">{nave.name} </h5>
                      <p>{nave.cargo_capacity} </p>
                      <p>{nave.hyperdrive_rating} </p>
                      <p>{nave.length} </p>
                      <p>{nave.manufacturer} </p>
                      <p>{nave.model} </p>
                      <p>{nave.cost_in_credits} </p>
                      <div className="d-flex justufy-content-between">  
                      </div>
                    </div>
                  </div>
          </div>
        );
      });
    };
    
  export default Starship;
  
