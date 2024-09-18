import styled from "styled-components";

export const Wrapper = styled("div")`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 38%;
    z-index: 998;
    transform: translate(-50%, -50%);
    @media (max-width: 1400px) {
      left: 25%;
    }
    @media (max-width: 570px) {
      left: 12%;
      width: 20px;
    }
  }
  input {
    width: 100%;
    height: 40px;
    outline: none;
    border-radius: 20px;
    border: 1px solid #6417b0;
    background: #fbfbfb;
    text-align: center;
    font-family: "Readex Pro", sans-serif;
    font-weight: 300;
    &::placeholder {
      color: var(--Uchinchi-shrift, #a9a9a9);
      font-family: "Readex Pro", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      @media (max-width: 570px) {
        font-size: 14px;
      }
    }
  }
`;
