import React from "react";

import UserItem from "./UserItem";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./UsersList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const UsersList = (props) => {
  const classes = useStyles();


  if (props.items.length === 0) {
    return (
      <div>
        <h2>No User Found.</h2>
      </div>
    );
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={2}>
          {props.items.map((user) => (
            <Grid key={user.id} item>
              <UserItem
                id={user.id}
                image={user.image}
                name={user.name}
                places={user.places}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UsersList;
