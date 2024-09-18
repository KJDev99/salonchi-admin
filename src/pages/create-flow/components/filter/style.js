import styled from "styled-components";

export const FilterWrapper = styled("div")`
  .filter-title {
    color: #212121;
    font-family: "Readex Pro", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 20px;
  }
`;

export const HStack = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    min-width: 180px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #a9a9a9;
    background: #fbfbfb;
    color: #a9a9a9;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
    &.active {
      color: #6417b0;
      border: 1px solid var(--siyohrang, #6417b0);
      background: var(--och-siyohrang, #f7f3ff);
    }
  }
`;
