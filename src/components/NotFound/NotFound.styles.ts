import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const ReturnArrowStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  margin-left: 20px;
  margin-top: 20px;
`;

export { Wrapper, ReturnArrowStyle };
