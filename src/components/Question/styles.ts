import styled from "styled-components";

type ContainerResponseFieldTypes = {
    display: string
}

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

export const ContainerResponseField = styled.div<ContainerResponseFieldTypes>`
    margin-top: 1.5rem;
    font-weight: bold;
    display: ${({ display }) => `${display}`};

    > form textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #f0f0f5;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
        margin-bottom: 1rem;
    }

    > form div {
        display: flex;
        flex-direction: row;
        justify-content: end;
        > button {
            cursor: pointer;
            padding: 1rem;
            border: none;
            border-radius: 8px;

        @media (max-width: 576px) {
            padding: .7rem;
        }
    }

  }
`;

export const ButtonResponse = styled.button`
    background-color: #249225;
    color: #fff;

    &:hover {
      background-color: #007f00;
      color: #fff;
    }
`;

export const ButtonCancel = styled.button`
    background-color: #dbdcdd;
    color: #737380;
    margin-right: 1rem;

    &:hover {
      background-color: #cecece;
      color: #737380;
}`;

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