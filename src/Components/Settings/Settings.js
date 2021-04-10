import React from "react";
import "./Settings.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";

const Settings = () => {
  const localStorage = window.localStorage;
  const history = useHistory();
  const classes = useStyles();

  const submit = () => {
    localStorage.removeItem("errorWood");
    history.push({ pathname: "/" });
  };

  return (
    <div className="settings">
      <h1>Налаштування</h1>
      <TextField label="Число чогось" type="number" />
      <TextField label="Число чогось" type="number" />
      <TextField label="Число чогось" type="number" />
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        className={classes.button}
        onClick={() => submit()}
      >
        Save
      </Button>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    margin: "25px auto",
    width: 300,
  },
}));
export default Settings;
