import styled from "styled-components";

export const CardInfo = styled("div")`
  border-radius: 20px;
  border: 1px solid #6417b0;
  background: #fff;
  padding: 20px;
  .save-btn {
    width: 100%;
    height: 38px;
    border-radius: 10px;
    border: 1px solid #6417b0 !important;
    background: #6417b0;
    color: #fff !important;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;

export const VStack = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    margin: 0;
    color: #585858;
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h4 {
    color: #212121;
    font-family: "Readex Pro", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const TableWrapper = styled("div")`
  table {
    thead {
      border-radius: 0 !important;
    }
    th {
      background: #ecd9ff !important;
      color: #212121;
      font-family: "Readex Pro", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400 !important;
      line-height: normal;
      text-align: center !important;
    }
    tbody {
      tr {
        &:nth-child(2n) {
          background-color: #f7f3ff;
        }
        td {
          color: #585858 !important;
          font-family: "Readex Pro", sans-serif !important;
          font-size: 12px;
          font-style: normal;
          font-weight: 300 !important;
          line-height: normal;
          text-align: center;
        }
      }
    }
  }
`;
