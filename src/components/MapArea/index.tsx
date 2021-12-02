import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.scss";

type CoordinatesType = {
  latitude: number;
  longitude: number;
};

const MapArea: React.FC<CoordinatesType> = ({ latitude, longitude }) => {
  return (
    <div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        zoomControl={false}
        className={styles.wrapper}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapArea;
