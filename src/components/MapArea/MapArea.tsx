import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Wrapper } from "./MapArea.styles";

type CoordinatesType = {
  latitude: number;
  longitude: number;
};

const Map = styled(MapContainer)`
  ${Wrapper}
`;

const MapArea: React.FC<CoordinatesType> = ({ latitude, longitude }) => {
  return (
    <div>
      <Map center={[latitude, longitude]} zoom={16} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
};

export { MapArea };
