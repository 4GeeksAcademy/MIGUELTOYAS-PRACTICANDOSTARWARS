import React from "react";
import { useNavigate } from "react-router";

const Card = ({ name, uid, type }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src="https://placehold.co/400"
        className="card-img-top"
        alt="..."
        onClick={() => navigate(`/${type}/${uid}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate(`/${type}/${uid}`)}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default Card;
