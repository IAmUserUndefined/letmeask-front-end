import styled from "styled-components";

const FormInputStyle = styled.input`
    width: 100%;
    max-width: 320px;
    padding: .5rem;
    border: 2px solid #a8a8b3;
    border-radius: 5px;

    &:focus{
        box-shadow: 0 0 0 0;
        border: 2px solid #000;
        outline: 0;
    }

    @media (max-width: 992px) {
        max-width: 800px;
    }
`;

export default FormInputStyle;