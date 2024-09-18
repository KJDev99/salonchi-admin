import styled from "styled-components";

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

export const ImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  img {
    max-width: 250px;
  }
`;

export const List = styled("ul")`
  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    p {
      white-space: nowrap;
      color: #212121;
      font-family: "Readex Pro", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin: 0;
      &:last-child {
        max-width: 250px;
      }
      &.divider {
        width: 100%;
        border-bottom: 0.5px solid #a9a9a9;
        margin-inline-start: 10px;
        margin-inline-end: 10px;
      }
    }
  }
`;

export const LinkButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
  color: var(--Ikkinchi-shrift, #585858) !important;
  font-family: "Readex Pro", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300 !important;
  line-height: normal;
  cursor: pointer;
`;
