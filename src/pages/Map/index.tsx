import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Loading, MapArea, MapTextBox, NotFound } from "components";
import CompanyContext from "../../context";
import styles from "./styles.module.scss";

const Map: React.FC = () => {
  const { state } = useContext(CompanyContext);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchCoordinates() {
      const cep = state.cep.split(".").join("").split("-").join("");
      await axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: cep,
            key: process.env.REACT_APP_GOOGLE_API,
          },
        })
        .then(({ data }) => {
          const { results } = data;
          try {
            const { lat, lng } = results[0].geometry.location;
            setLatitude(lat);
            setLongitude(lng);
            setLoaded(true);
          } catch (err) {
            setLatitude(0);
            setLongitude(0);
            setLoaded(true);
          }
        });
    }
    if (state.nome !== "") {
      fetchCoordinates();
    }
  }, [state, latitude, longitude, loaded]);

  return (
    <div>
      {!loaded ? (
        <Loading />
      ) : latitude || longitude ? (
        <div className={styles.wrapper}>
          <div className={styles.area}>
            <MapArea latitude={latitude} longitude={longitude} />
          </div>
          <div className={styles.box}>
            <MapTextBox
              razao_social={state.nome}
              cnpj={state.cnpj}
              logradouro={state.logradouro}
            />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Map;
