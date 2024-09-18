import styled from "styled-components";

export const Wrapper = styled("div")`
  position: relative;
  .upload-image {
    width: 169px;
    height: 169px;
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
  }
  .edit-pencil {
    position: absolute;
    bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 51px;
    background: #6417b0;
    border-radius: 50%;
    border: none;
  }
`;
