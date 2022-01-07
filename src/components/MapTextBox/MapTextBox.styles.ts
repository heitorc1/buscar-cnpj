import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;

  width: 15vw;
  height: 30vh;

  border-radius: 10px;
`;

const Fields = styled.div`
  padding: 13px 10px;
`;

const Values = styled(Typography)`
  font-weight: 700;
  color: #3a8970;
`;

const Label = styled(Typography)`
  font-weight: 500;
  color: #6bb99e;
`;

const IconStyles = css`
  display: flex;
  color: #3a8970;

  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 25px;
  padding: 0;
`;

export { Wrapper, Fields, Values, Label, IconStyles };
