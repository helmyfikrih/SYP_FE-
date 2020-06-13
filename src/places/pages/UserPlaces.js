import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "pasar lama",
    description:
      "Bustling area with market stalls selling local street food until late in the evening.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOLMYXwZq45M4P8ur9xBV8e4egbQ5GIEBz7cHcX=w493-h240-k-no",
    address:
      "Jl. Kisamaun, RT.001/RW.006, Pasar Lama, Kec. Tangerang, Kota Tangerang, Banten 15118",
    location: {
      lat: 106.6278167,
      lng: -6.1770127
    },
    creator: 'u1'
  },
  {
    id: "p2",
    title: "pasar lama",
    description:
      "Bustling area with market stalls selling local street food until late in the evening.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOLMYXwZq45M4P8ur9xBV8e4egbQ5GIEBz7cHcX=w493-h240-k-no",
    address:
      "Jl. Kisamaun, RT.001/RW.006, Pasar Lama, Kec. Tangerang, Kota Tangerang, Banten 15118",
    location: {
      lat: 106.6278167,
      lng: -6.1770127
    },
    creator: 'u2'
  },
  {
    id: "p3",
    title: "pasar lama",
    description:
      "Bustling area with market stalls selling local street food until late in the evening.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOLMYXwZq45M4P8ur9xBV8e4egbQ5GIEBz7cHcX=w493-h240-k-no",
    address:
      "Jl. Kisamaun, RT.001/RW.006, Pasar Lama, Kec. Tangerang, Kota Tangerang, Banten 15118",
    location: {
      lat: 106.6278167,
      lng: -6.1770127
    },
    creator: 'u1'
  },
];

const UserPlaces = () => {
  return (
    <PlaceList items={DUMMY_PLACES}/>
  );
};

export default UserPlaces;
