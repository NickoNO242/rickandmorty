import React from "react";
import Loading from "./Loading";
const Characters = ({ characters }) => {
  return (
    <div className="row pt-5 ">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            {item.image ? (
              <img src={item.image} className="card-img-top" alt="..." />
            ) : (
              <Loading />
            )}

            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Especie: {item.species}</p>
              {item.type ? <p>Tipo: {item.type}</p> : <p>Tipo: ¿Normal?</p>}
              <p>Ubicación: {item.location.name}</p>

              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
