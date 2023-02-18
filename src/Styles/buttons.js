import styled from "styled-components";

export const ButtonPink = styled.button`
    background: var(--color-primary);
    height: 48px;
    color: var(--grey-0);
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    :hover{
        background: var(--color-primary-Focus);
    }
`
export const ButtonGrey = styled.button`
    background: var(--grey-1);
    height: 48px;
    color: var(--grey-0);
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    :hover{
        background: var(--grey-2);
    }
`
export const ButtonBlack = styled.button`
    background: var(--grey-3);
    height: 32px;
    color: var(--grey-0);
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    :hover{
        background: var(--grey-2);
    }
`
export const ButtonRed = styled.button`
    background: var(--color-primary-Negative);
    height: 48px;
    color: #FFFFFF;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    padding: 15px;
    :hover{

    }
`

export const ButtonGreyModalSet = styled.button`
    background: var(--grey-1);
    height: 48px;
    color: var(--grey-0);
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    padding: 15px;
    :hover{
        background: var(--grey-2);
    }

`