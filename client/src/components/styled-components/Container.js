import styled from 'styled-components'


export const MainContainer = styled.div`
    width: 60vw; 
    min-height: 5rem; 
    margin: 5rem auto; 
    padding-bottom: 100vh;

    @media (max-width: 1300px) {
        width: 80vw;
    }

    @media (max-width: 769px) {
        width: 100vw;
        margin: 0;
    }
`

export const NarrowContainer = styled.div`
    width: 33rem; 
    min-height: 5rem; 
    margin: 5rem auto; 
    padding-bottom: 50vh;
`

export const FadeContainer = styled.div`
    display: flex;
    position: absolute;
    height: 89vh;
    width: 100%;
    top: 11vh;
    background: rgba(255,255,255, .6);
`
