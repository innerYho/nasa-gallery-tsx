import styled, { keyframes } from 'styled-components'

const ring = keyframes`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`

export const Spinner = styled.div`
display: inline-block;
position: relative;
width: 80px;

&> div{
    box-sizing: border-box;
    
}
`

export const SpinnerLayout = styled.div`
display: flex;
padding: 2rem;
align: 2rem;
align-items: center;
justify-content: center;
`