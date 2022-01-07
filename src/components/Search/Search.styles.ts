import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding-bottom: 5vh;
`;

const Title = styled(Wrapper)`
  color: #3a8970;
`;

const TitleText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 60px;
`;

const IconStyle = css`
  margin-right: 20px;
  margin-top: 13px;

  width: 48px;
  height: 48px;
`;

export { Wrapper, Title, TitleText, IconStyle };
