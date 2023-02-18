import styled from "styled-components";

export const DivContainerModalAdd = styled.div`
    width: 100%;
`

export const HeaderModalAdd = styled.header`
    display: flex;
    color: var(--grey-0);
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: var(--grey-2);
    padding: 1.5rem;
    border-radius: 4px 4px 0px 0px;

`

export const FormModalAdd = styled.form`
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    color: var(--grey-0);
    gap: 10px;
    font-family: "Inter", sans-serif;
    width: 100%;
    padding: 2.5rem;
    border-radius: 0px 0px 4px 4px;

`
export const ButtonCloseModalAdd = styled.button`
font-family: "Nunito" sans-serif;
color: var(--grey-1);
`