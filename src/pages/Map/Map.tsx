import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Loading, MapArea, MapTextBox, NotFound } from "components";
import CompanyContext from "context";
import { Box } from "./Map.styles";

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
        <>
          <MapArea latitude={latitude} longitude={longitude} />
          <Box>
            <MapTextBox
              razao_social={state.nome}
              cnpj={state.cnpj}
              logradouro={state.logradouro}
            />
          </Box>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export { Map };
