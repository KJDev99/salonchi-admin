import styled from "styled-components";

export const Card = styled("div")`
  border-radius: 10px;
  border: 1px solid #6417b0;
  background: #fff;
  min-width: 211px;
  min-height: 390px;
  padding: 20px;
`;

export const CardHeader = styled("div")`
  width: 100%;
  img {
    width: 100%;
    min-height: 200px;
    max-height: 230px;
  }
  .ant-image {
    display: block !important;
  }
`;
export const CardBody = styled("div")`
  h4 {
    color: #212121;
    text-align: center;
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-decoration: none;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    .price-list {
      display: flex;
      justify-content: space-between;
      p {
        color: #585858;
        font-family: "Readex Pro", sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
      }
    }
  }
`;
export const CardFooter = styled("div")`
  padding-top: 15px;
  &.card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 76px !important;
      border-radius: 10px;
      background: #6417b0 !important;
    }
  }
  button {
    width: 100%;
    min-height: 31px;
    border-radius: 10px;
    background: #6417b0;
    color: #fff;
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:disabled {
      background: #6417b0;
      opacity: 0.5;
      color: #fff;
    }
  }
`;
export const ModalWrapper = styled("div")`
  width: 100%;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    h4 {
      color: var(--Asosiy-shrift, #212121);
      font-family: "Readex Pro";
      font-size: 24px;
      font-weight: 500;
    }
  }
  .image-gallery {
    height: 100%;
    .image-gallery-content {
      height: 100%;
      .image-gallery-slide-wrapper {
        height: 80%;
        .image-gallery-swipe {
          height: 100%;
          .image-gallery-slides {
            height: 100%;
            img {
              width: 100%;
              object-fit: contain;
              height: 100% !important;
              min-height: 300px;
              max-height: 350px;
            }
          }
        }
      }
    }
  }
  .image-gallery-thumbnails-container {
    display: flex;
    gap: 28px;
    justify-content: center;
    button {
      border-radius: 12px;
      width: 79px;
      height: 79px;
      span {
        width: 100%;
        height: 100%;
      }
      &.active,
      &:hover {
        border: 2px solid var(--General-color, #6417b0);
        cursor: pointer;
      }
    }
  }
  .image-gallery-thumbnail-image {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  .modalInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .subtitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h5 {
        color: var(--siyohrang, #6417b0);
        font-family: "Readex Pro";
        font-size: 20px;
        font-weight: 400;
        margin: 0;
      }
      p {
        color: var(--siyohrang, #6417b0);
        font-family: "Readex Pro";
        font-size: 24px;
        font-weight: 500;
        margin: 0;
      }
    }
    .note {
      width: 100%;
      padding: 20px 80px 20px 26px;
      border-radius: 10px;
      background: var(--och-label-background, #fbfbfb);
      border: 1px solid var(--siyohrang, #6417b0);

      p {
        color: #000;
        font-family: "Readex Pro";
        font-size: 14px;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
        span {
          color: #000;
          font-family: "Readex Pro";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
        }
      }
    }
    .infos {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h4 {
        color: var(--Asosiy-shrift, #212121);
        font-family: "Readex Pro";
        font-size: 20px;
        font-weight: 400;
        margin: 0;
      }
      .infoLeft {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 4px;
        padding-right: 4px;
        p {
          white-space: nowrap;
          flex-shrink: 0;
          color: var(--Asosiy-shrift, #212121);
          font-family: "Readex Pro";
          font-size: 14px;
          font-weight: 300;
          margin: 0;
        }
        .lines {
          width: 100%;
          border-bottom: 1px dashed #212121;
        }
      }
      .infoRight {
        p {
          white-space: nowrap;
          color: var(--Asosiy-shrift, #212121);
          font-family: "Readex Pro";
          font-size: 14px;
          font-weight: 300;
          margin: 0;
        }
      }
    }
    .btn {
      border-radius: 10px;
      background: var(--siyohrang, #6417b0);
      color: #fbfbfb;
      height: 44px;
      font-family: "Readex Pro", sans-serif;
      &:disabled {
        opacity: 0.5;
      }
      &:hover {
        color: #fbfbfb;
        border: 1px solid var(--siyohrang, #6417b0);
      }
    }
  }
`;

export const SecondMoadlWrapper = styled("div")`
  width: 100%;
  padding: 0 50px;
  .title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4 {
      color: var(--Asosiy-shrift, #212121);
      font-family: "Readex Pro";
      font-size: 22px;
      font-weight: 500;
      margin: 0;
    }
    h5 {
      color: var(--Asosiy-shrift, #212121);
      font-family: "Readex Pro";
      font-size: 22px;
      font-weight: 500;
      margin: 0;
    }
  }
  .form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .btn {
      border-radius: 10px;
      background: var(--siyohrang, #6417b0);
      color: #fbfbfb;
      height: 44px;
      border: none;
      &:hover {
        color: #fbfbfb;
        border: 1px solid var(--siyohrang, #6417b0);
      }
    }
  }
`;
