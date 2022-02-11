import styled from "styled-components";

const InformationContainerStyle = styled.div`
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

export default InformationContainerStyle;