import { styled } from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .flow-title {
    color: #212121;
    font-family: "Readex Pro", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: inherit;
    margin: 20px 0 20px 0;
    &.payments-title {
      margin-top: 0;
      margin-bottom: 20px;
    }
  }
  .btn-group {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 24px 0;
    height: 100vh !important;
    button {
      width: 120px;
      height: 40px;
    }
    .btn-success {
      background-color: #52c41a !important;
      border: none;
      color: #fff !important;
    }
  }
  .cancel-btn {
    min-width: 135px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #6417b0 !important;
    background: #fff !important;
    color: #6417b0 !important;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .save-btn {
    min-width: 135px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #6417b0 !important;
    background: #6417b0 !important;
    color: #fff !important;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 32px;
  width: 100%;
  &.expenses-header {
    margin: 0 0 12px;
  }
  &.order-header {
    margin: 0;
  }
  button {
    max-width: 240px;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const Footer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 32px 0;
  button {
    max-width: 277px;
  }
`;

export const Title = styled("h2")`
  font-size: 18px;
  color: #000000;
  text-transform: uppercase;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
`;

export const Container = styled("div")`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a {
    margin: 0;
    padding: 0;
  }
`;

export const Input = styled("input")`
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
  &.input-error {
    border: 1px solid var(--main-red);
  }

  &::placeholder {
    color: #a9a9a9;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  &:disabled {
    background: var(--secondary);
  }
`;
export const FormGroupProvider = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .ant-picker-focused,
  .ant-picker:hover {
    border-color: var(--green);
  }
  .ant-picker-focused {
    box-shadow: 0 0 0 2px rgba(44, 71, 62, 0.2);
  }
  .ant-select-selector {
    height: 35px !important;
    border-radius: 4px !important;
    margin: 4px 0;
  }
`;

export const Error = styled("p")`
  color: var(--main-red);
  font-family: "Rubik", sans-serif;
  font-size: 12px;
`;
export const Label = styled("label")`
  color: #585858;
  font-family: "Readex Pro", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export const Text = styled("p")`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-decoration: none;
  &.accept-text {
    color: #52c41a;
  }
  &.cancelled-text {
    color: #ff4d4f;
  }
`;

export const NotifyText = styled("div")`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #08979c;
  &.canceled_by_deliver {
    color: #ff4d4e;
  }
`;
