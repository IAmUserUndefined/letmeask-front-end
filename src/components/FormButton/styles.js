import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 100%;
    max-width: 320px;
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

    @media (max-width: 992px) {
        max-width: 800px;
    }
`;

export default ButtonStyle;