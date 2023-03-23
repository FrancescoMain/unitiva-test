import { Button } from '@mui/material';
import styled from 'styled-components'


export const Page = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 700px;
    
`;

export const MyButton = styled(Button)`
    margin-left: 20px !important;

    height: ${({ size }) => size === 'large' ? '40px' : '25px'};
    min-width: ${({ size }) => size === 'large' ? '120px' : 'none' }!important;
    color: ${({ color  }) => color === "secondary" ? "lightgrey" : "white"} !important;
    background-color: ${({color}) => color === "secondary" ? "#999999" : "#5f729d"}!important;
    font-size: 12px !important;
    text-transform: none !important;
`;