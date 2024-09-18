import styled from "styled-components";

export const CardWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

export const Card = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  min-height: 81px;
  .total {
    display: flex;
    align-items: center;
    padding: 6px 0;
    gap: 6px;
    h3 {
      margin-bottom: 0;
    }
  }
  h3 {
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
  }
  &.linechart-card {
    width: 100%;
    min-height: 410px;
  }
  .card-left {
    svg {
      width: 32px;
      height: 32px;
    }
  }
  .card-right {
    text-align: right;
  }
  h2 {
    font-family: "Rubik", sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    font-family: "Rubik", sans-serif;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ChartWrapper = styled("div")`
  margin: 32px 0;
  #chart {
    width: 100%;
    height: 100%;
  }
`;

export const TableWrapper = styled("div")`
  table {
    tr {
      th {
        width: 120px;
        height: 38px;
        font-weight: 400 !important;
        font-family: "Readex Pro", sans-serif !important;
      }
      th:first-child {
        background-color: #daf6ff;
      }
      th:nth-child(2) {
        background-color: #edfffd;
      }
      th:nth-child(3) {
        background-color: #f4e7ff;
      }
      th:nth-child(4) {
        background-color: #ffdede;
      }
      th:nth-child(5) {
        background-color: #fffcea;
      }
      th:nth-child(6) {
        background-color: #d6ffdf;
      }
      th:nth-child(7) {
        background-color: #efefef;
      }
    }
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
`;
