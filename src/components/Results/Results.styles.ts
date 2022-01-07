import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 12vh;
  box-sizing: border-box;
  padding-right: 2vw;
  padding-left: 2vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const NotFound = styled.div`
  width: 100%;
  padding-top: 12vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fff;
  }
`;

export { Wrapper, NotFound };
