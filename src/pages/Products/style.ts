import styled from 'styled-components'

export const Wrap = styled.div`
    background-color:#f1f1f1;
    border-bottom: 1px solid lightgrey;


`;

export const ImgContainer = styled.div`
    width:100%;
    height: 100px;
    overflow : hidden ;
    border-bottom: 1px solid #c5c5c5;

`;

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5% 5% 0 0;

`;

export const Box = styled.div`  
    display: flex;

`;

export const Card = styled.div`
    width: calc(100% / 6);
    margin: 10px;
    border: 1px solid #c5c5c5;
    border-radius: 5%;

`;

export const Title = styled.h3`
    color: #6a6a6a
`;

export const Info = styled.div`
    padding: 10px;

`;

export const Code = styled.span`
    font-size: 12px;
    display: block;

`;

export const Qty = styled.span`
    display: block;
    margin-top: 6px;
    font-size: 12px;

`;

export const Price = styled.span`
    display: block;
    margin-top: 6px;
    font-size: 12px;

`;

export const SelectSize = styled.select`
    background-color: white;
    border: 1px #b2b2b2 solid;
    border-radius: 4px;
    padding: 2px;
    font-size: 10px;
    width: 70px;
    height: 20px;
`;

