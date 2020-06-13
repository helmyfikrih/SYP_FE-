import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";

import "./UserItem.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const UserItem = (props) => {
  const classes = useStyles();
  return (
    <Link to={`/${props.id}/places`} className='cardList'>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt={props.name} src={props.image} />}
          title={props.name}
          subheader={`${props.places} ${
            props.places === 1 ? "Place" : "Places"
          }`}
        />
      </Card>
      <br />
    </Link>
  );
};

export default UserItem;
