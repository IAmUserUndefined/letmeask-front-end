import styled from "styled-components";

const ContainerMainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    > div {
        width: 100%;
        height: 100vh;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    > div:first-child {
        background-color: #835afd;

        > img, h1, span {
            margin-bottom: 1rem;
        }

        > img {
            width: 313px;
            height: 403px;
        }

        > h1 {
            color: #fff;
            font-size: 2.5rem;
            width: 440px;
        }

        > span {
            color: #f8f8f8;
            font-size: 1.5rem;
            width: 459px;
            opacity: .8;
        }

        @media (max-width: 992px) {
            display: none;
        }
    }
`;

export default ContainerMainStyle;