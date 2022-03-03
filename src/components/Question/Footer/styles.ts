import styled from "styled-components";

const FooterStyle = styled.footer`
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

export default FooterStyle;