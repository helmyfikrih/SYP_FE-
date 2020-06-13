import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import Box from "@material-ui/core/Box";

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
  button: {
    margin: theme.spacing(1),
  },
}));

const PlaceList = props => {
  const classes = useStyles();

    if(props.items.length===0){
      return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify='center' spacing={2}>
              <Card>
                <CardContent>
                  <Box component='span' m={1}>
                    <h2>
                      <div className={classes.root}>
                        {"No Place found. Maybe create one ?"}
                      </div>
                    </h2>
                  </Box>
                  <div>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.button}
                      startIcon={<RoomIcon />}>
                      Share Place
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
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