import React from "react";
import { useParams } from "react-router";


const Personaje = () => {
    const [persona, setPersona] = useState([]);
    
    const {id} = useParams();


    
    useEffect(() => {
  
      const getPersonaje = () => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => response.json())
          .then((data) => setPersona(data.results))
  
      }
      getPersonaje();
  
    }, []);
  
   return persona.map((persona) => {
     return (  

          <div className="container-fluid d-flex mt-2 justify-content-center"
              key={persona.id}>
                  <div className="card card-info" style={{ width: 18 + "rem" }}>
                  <img src={"https://starwars-visualguide.com/assets/img/characters/" + personas.id + ".jpg"} className="card-img-top" alt="..." />
                    <div className="card-body border">
                      <h5 className="card-title fs-3">{persona.name} </h5>
                      <p>{persona.gender} </p>
                      <p>{persona.height} </p>
                      <div className="d-flex justufy-content-between">  
                      </div>
                    </div>
                  </div>
          </div>
        );
      });
    };
    
  export default Personaje;
  
  