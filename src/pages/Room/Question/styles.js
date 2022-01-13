import styled from "styled-components";

export const ContainerQuestion = styled.div`
    max-width: 600px;
    background-color: #fff;
    padding: 2rem;
    margin: 2rem auto;
    border-radius: 8px;
`;

export const ContentQuestion = styled.div`
    text-align: justify;
`;

export const ContainerResponse = styled.div`
    margin-top: 1.5rem;
    font-weight: bold;
`;

export const Footer = styled.footer`
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #737380;

        > div  {
            > svg {
                cursor: pointer;
                margin-right: .5rem;
                width: 25px;
                height: 25px;
            }

            > svg:first-child {
                &:hover {
                    color: #222;
                }
            }

            > svg:last-child {
                margin-right: -10px;

                &:hover {
                    color: #ff0000;
                }
            }

        }
`;