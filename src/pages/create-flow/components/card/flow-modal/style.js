import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 30px 0;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background: var(--siyohrang, #6417b0);
    border: none;
    color: var(--Oq, #fff);
    font-family: "Readex Pro", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
    cursor: pointer;
  }
  .title {
    h4 {
      color: var(--Ikkinchi-shrift, #585858);
      font-family: "Readex Pro", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    h5 {
      color: var(--Ikkinchi-shrift, #585858);
      font-family: "Readex Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 23.4px */
    }
  }
`;
