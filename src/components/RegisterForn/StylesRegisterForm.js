import styled from "styled-components";

export const DivContainerFormRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 3.6rem 1.3rem 3.6rem 1.3rem;
    width: 100%;
    gap: 10px;
    max-width: 370px;
    .buttonRegister{
        width: 100%;
    }
`
export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    color: var(--grey-0);
    gap: 10px;
    font-family: "Inter", sans-serif;
    width: 100%;
    `