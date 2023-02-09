import styled from "styled-components";

export const SelectStyled = styled.select`
    background: var(--grey-2);
    border: none;
    padding: 16px;
    border-radius: 4px;
    height: 48px;
    color: var(--grey-1);

    :focus{
        border: 1px solid var(--grey-0);
        ::placeholder{
            color: var(--grey-0);
        }
    }
`