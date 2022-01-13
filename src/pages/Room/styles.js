import styled from "styled-components";

export const ContainerPage = styled.main`
    margin: 3rem auto;
    padding: 1rem;
    max-width: 600px;

    > h1 {
        font-weight: 900;
        margin-bottom: 2rem;
        text-indent: 5px;
    }
`;

export const InformationContainer = styled.div`
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > h2, span {
            margin-top: 1rem;
            text-align: center;
            padding: 0.5rem;
        }

        > span {
            color: #4d5e77;
            width: 300px;
        }
`;

export const ContainerQuestion = styled.div`
    margin: 2rem auto;
    max-width: 600px;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > strong {
            text-indent: 5px;
        }
    }

    > textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
        margin-bottom: 1rem;
    }
`;

export const Button = styled.button`
    width: 100%;
    width: 180px;
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

    @media (max-width: 576px) {
        width: 130px;
        padding: .7rem;
    }
`;