import styled from "styled-components";
import { Checkbox } from "antd";

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  @media (max-width: 410px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CheckboxStyle = styled(Checkbox)`
  input,
  span {
    cursor: pointer;
  }
`;
