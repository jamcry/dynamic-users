import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MapView = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: parseFloat(props.position.latitude), lng: parseFloat(props.position.longitude) }}
  >
    <Marker
      position={{ lat: parseFloat(props.position.latitude), lng: parseFloat(props.position.longitude) }}
    />
  </GoogleMap>
));