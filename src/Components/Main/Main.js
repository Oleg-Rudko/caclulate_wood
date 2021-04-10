import React from "react";
import "./Main.scss";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <h1>Навігація по сайту</h1>
      <div className="main__nav">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/settings"
        >
          Налаштування
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/calculation"
        >
          Разрахунок
        </Button>
      </div>
    </div>
  );
};

export default Main;
