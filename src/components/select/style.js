import { Select } from "antd";
import styled from "styled-components";

export const CustomSelect = styled(Select)`
  input {
    width: 100%;
    height: 38px;
    border-radius: 10px;
    border: 1px solid #6417b0 !important;
    background: #fbfbfb;
    text-indent: 15px;
    outline: none;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .ant-select-selector {
    width: 100%;
    height: 38px;
    border-radius: 10px !important;
    border: 1px solid #6417b0 !important;
    background: #fbfbfb;
    /* text-indent: 15px */
    outline: none;
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    &::placeholder {
      color: #a9a9a9;
      font-family: "Readex Pro", sans-serif;
      font-size: 14px !important;
      font-style: normal;
      font-weight: 300 !important;
      line-height: normal;
    }
  }
`;
