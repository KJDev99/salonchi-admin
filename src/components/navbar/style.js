import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  min-height: 80px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: sticky;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media (max-width: 540px) {
    padding: 20px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
export const AccountCard = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  height: 100%;
  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
  }
  .user-name {
    font-size: 20px;
    font-weight: 400;
    font-family: "Rubik", sans-serif;
    @media (max-width: 400px) {
      display: none;
    }
    @media (max-width: 540px) {
      font-size: 16px;
    }
  }
  svg {
    font-size: 34px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 0;
    box-shadow: none;
    @media (min-width: 991px) {
      display: none;
    }
  }
`;

export const Flex = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 540px) {
    align-items: flex-start;
  }
  .left {
    min-width: 40%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 540px) {
      flex-direction: column;
    }
    button {
      height: 43px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      color: #fff !important;
      background: var(--siyohrang, #6417b0);
      border: none !important;
      font-family: "Readex Pro", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media (max-width: 540px) {
        font-size: 14px;
        height: 36px;
      }
    }
  }
`;
