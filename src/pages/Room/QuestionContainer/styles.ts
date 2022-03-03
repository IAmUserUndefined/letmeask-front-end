import styled from "styled-components";

export const QuestionContainerStyle = styled.div`
    margin: 2rem auto;
    max-width: 600px;

    > form div {
        display: flex;
        justify-content: end;
        align-items: center;
    }

    > form textarea {
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