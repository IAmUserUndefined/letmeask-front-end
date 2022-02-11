import styled from "styled-components";

type ModalContainerTypes = {
  display: string;
}

export const ModalContainer = styled.div<ModalContainerTypes>`
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ display }) => `${display}`};
  justify-content: center;
`;

export const ModalStyle = styled.div`
  width: 550px;
  height: 340px;
  margin-top: 120px;
  background-color: #F8F8F8;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  animation: modal 0.6s;

  @media (max-width: 576px) {
    width: 280px;
    height: 250px;
  }

  > svg {
    color: #e73f5d;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  > div span {
      display: block;
      margin: 0 auto;
      text-align: center;
      color: #737380;
      font-weight: bold;
      margin-bottom: 1rem;
  }

`;

export const MessageModal = styled.h3`
    color: #000;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.3rem;

    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
`;

export const MessageModalMain = styled.h3`
    color: #000;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 576px) {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 1rem;
    width: 13rem;

    > button {
      cursor: pointer;
      padding: 1rem;
      border: none;
      border-radius: 8px;

      @media (max-width: 576px) {
        padding: .7rem;
      }
    }
`;

export const Button = styled.button`
      width: 100%;
      max-width: 300px;
      border-radius: 8px;
      background-color: #835afd;
      color: #fff;
      border: none;
      font-weight: bold;
      padding: 1rem;
      cursor: pointer;

      &:hover {
          background-color: #6f4bd8;
      }
`;

export const ButtonCancel = styled.button`
    background-color: #dbdcdd;
    color: #737380;

    &:hover {
      background-color: #cecece;
      color: #737380;
    }
`;

export const ButtonDelete = styled.button`
    background-color: #e73f5d;
    color: #fff;

    &:hover {
      background-color: #d73754;
      color: #fff;
    }
`;