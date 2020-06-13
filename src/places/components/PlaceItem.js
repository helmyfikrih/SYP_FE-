import React, { useState } from "react";

import "./PlaceItem.css";

import Modal from "../../shared/components/UIElements/Modal";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import MapIcon from "@material-ui/icons/Map";
import { Button } from "@material-ui/core";

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

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCanel={closeMapHandler}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={
          <Button color='secondary' onClick={closeMapHandler}>
            Close
          </Button>
        }>
        <div className='map-container'>This is Map</div>
      </Modal>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              R
            </Avatar>
          }
          title={props.creatorId}
          subheader='September 14, 2016'
        />
        <CardMedia
          className={classes.media}
          image={props.image}
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='h4' component='h4' gutterBottom>
            {props.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            color='primary'
            aria-label='view on map'
            onClick={openMapHandler}>
            <MapIcon />
          </IconButton>
          <IconButton color='secondary' aria-label='delete'>
            <DeleteForeverIcon />
          </IconButton>
          <IconButton color='primary' aria-label='edit'>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default PlaceItem;
