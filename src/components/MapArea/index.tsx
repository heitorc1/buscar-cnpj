import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.scss";
import CompanyContext from "../../context";
import axios from "axios";

const MapArea: React.FC = () => {
  const { state } = useContext(CompanyContext);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchCoordinates() {
      const cep = state.cep.split(".").join("").split("-").join("");
      console.log(process.env.REACT_APP_GOOGLE_API);
      await axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: cep,
            key: process.env.REACT_APP_GOOGLE_API,
          },
        })
        .then(({ data }) => {
          const { results } = data;
          const { lat, lng } = results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
          setLoaded(true);
        });
    }
    fetchCoordinates();
  }, [state]);

  return (
    <div>
      {!!loaded ? (
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
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default MapArea;
