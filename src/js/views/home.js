import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context); 
  const navigate = useNavigate();

//   useEffect(() => {
//     actions.getPersonajes();
//     actions.getVehiculos();
//     actions.getPlanetas();
//   }, []);

  return (
    <>
      <div className="text-center mt-5">
		<button type="button" className="btn btn-success" onClick={() => navigate("/personajes")}>
			Ir a personajes
		</button>
	  </div>
      
    </>
  );
};
