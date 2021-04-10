import React from "react";
import { Redirect } from "react-router-dom";
import "./Calculation.scss";

const Calculation = () => {
  const localStorage = window.localStorage;
  if (localStorage && !localStorage.wood) {
    localStorage.setItem(
      "errorWood",
      "Будь ласка заповни налаштування тому що в браузері немає ніяких данних"
    );
    return <Redirect to="/" />;
  }
  return <div>Calculation</div>;
};

export default Calculation;
