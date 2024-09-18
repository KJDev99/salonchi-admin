import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  label {
    color: #585858;
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input {
    margin-top: 8px;
    width: 100%;
    height: 38px;
    border-radius: 10px;
    border: 1px solid #6417b0;
    background: #fbfbfb;
    text-indent: 15px;
    outline: none;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
      font-size: 12px !important;
      color: var(--secondary-text);
      font-family: "Rubik", sans-serif;
    }
    &.error {
      border: 1px solid var(--red);
      &::placeholder {
        font-size: 12px !important;
        color: var(--secondary-text);
        font-family: "Rubik", sans-serif;
      }
    }
  }
  @media (max-width: 576px) {
    margin: 8px 0;
    input {
      height: 44px;
      font-size: 12px;
      &::placeholder {
        font-size: 12px;
      }
    }
    label {
      font-size: 12px;
    }
  }
`;
