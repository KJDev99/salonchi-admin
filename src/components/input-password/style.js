import styled from "styled-components";
import { Input } from "antd";

export const PasswordInput = styled(Input.Password)`
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
  padding: 0 15px !important;
  input {
    border-radius: 16px !important;
  }
  &.input-error {
    border: 1px solid var(--red);
  }
  input::placeholder {
    color: #a9a9a9;
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  &:disabled {
    background: var(--secondary);
  }
`;
