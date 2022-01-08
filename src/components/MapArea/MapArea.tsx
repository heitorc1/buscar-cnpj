import React from "react";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Map } from "./MapArea.styles";

type CoordinatesType = {
  latitude: number;
  longitude: number;
};

const MapArea: React.FC<CoordinatesType> = ({ latitude, longitude }) => {
  return (
    <>
      <Map center={[latitude, longitude]} zoom={16} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </>
  );
};

export { MapArea };
