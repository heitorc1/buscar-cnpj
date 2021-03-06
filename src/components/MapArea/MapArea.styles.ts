import { MapContainer } from "react-leaflet";
import styled, { css } from "styled-components";

const Wrapper = css`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

const Map = styled(MapContainer)`
  ${Wrapper}
`;

export { Map };
