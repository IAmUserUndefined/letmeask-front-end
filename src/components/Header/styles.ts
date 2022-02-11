import styled from "styled-components";

type NavigationContainerTypes = {
  left: string
}

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 7.5rem;
    margin: 0 auto;
    border-bottom: 1px solid #a8a8b3;

    @media (max-width: 576px) {
      padding: 1rem 2.5rem;
    }
`;

export const NavigationContainer = styled.nav<NavigationContainerTypes>`
    > ul {
        display: flex;
        flex-direction: row;
    }

    > ul li {
        list-style: none;
        margin-right: 1rem;
    }

    @media (max-width: 1058px) {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 85px;
        left: ${({ left }) => `${left}`};
        background-color: #f5f5f5;
        transition: all 0.7s;

        > ul {
            margin: 1rem auto;
            flex-direction: column;
        }

        > ul li {
          max-width: 200px;
          margin: 1rem auto;
        }
    }

`;

export const IconMenu = styled.div`
  cursor: pointer;
  display: none;
  color: #000;

  > svg {
    width: 40px;
    height: 40px;
  }
  
  @media (max-width: 1058px) {
    display: block;
  }

  @media (max-width: 768px) {
    > svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 576px) {
    > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const LogoContainer = styled.div`
    > img {
        width: 100px;
    }
`;

export const CodeRoomCopy = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #835afd;
    border-radius: 8px;

    span:first-child {
        background-color: #835afd;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-right: 7px;
        padding: 5px;

        &:hover {
            background-color: #6f4bd8;
        }
    }

    > span + span {
        padding: 5px;
    }
`;

export const HeaderButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #835afd;
    background-color: #F8F8F8;
    border-radius: 8px;
    border: 1px solid #835afd;
    padding: 10px;

    &:hover {
        color: #fff;
        background-color: #835afd;
        transition: .3s all;
    }
`;