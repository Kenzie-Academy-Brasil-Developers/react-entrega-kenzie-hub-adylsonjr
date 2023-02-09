import styled from "styled-components";

export const DivContainerDashBoardPage = styled.div`
    padding: 1.5rem;
    @media (min-width: 768px){
        padding: 0px 210px;
        width: 100%;
    }
`
export const HeaderDashBoard = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-3);
    padding: 1rem;
    .buttonLogout{
        padding: 1rem;
    }
`
export const DivUserInfos = styled.div`
    gap: 10px;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid var(--grey-3);
    @media (min-width: 768px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`
export const DivDashBoard = styled.div`
    gap: 20px;
    margin-top: 50px;
`