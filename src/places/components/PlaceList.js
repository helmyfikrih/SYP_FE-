import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PlaceItem from './PlaceItem';
import './PlaceList.css';

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

const PlaceList = props => {
  const classes = useStyles();

    if(props.items.length===0){
      return (
        <div>
          <h2>No Place found. Maybe create one ?</h2>
          <button>Share Place</button>
        </div>
      );
    }

    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={2}>
            {props.items.map((place) => (
              <Grid key={place.id} item>
                <PlaceItem
                  id={place.id}
                  image={place.imageUrl}
                  description={place.description}
                  address={place.address}
                  creatorId={place.creator}
                  coordinates={place.location}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
};

export default PlaceList;