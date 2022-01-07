import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 18vw;
  height: 30vh;
  padding: 15px;
  border-radius: 10px;
`;

const LinkStyle = css`
  text-decoration: none;
`;

const Fields = styled.div`
  padding: 10px;
`;

const Values = styled(Typography)`
  font-weight: 700;
  color: #3a8970;
`;

const Label = styled(Typography)`
  font-weight: 500;
  color: #6bb99e;
`;

export { Wrapper, LinkStyle, Fields, Values, Label };
