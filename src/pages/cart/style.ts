import styled from 'styled-components'

export const Box = styled.div`
    background-color: white;
    padding: 30px;
    border: 1px solid grey;
    border-radius: 20px;

`;

export const ModelCol = styled.th`
    width: 500px;
    font-size: 20px;
    text-align: start;
    color: #999999;

`;

export const Table = styled.table`
    margin: 20px 10px;
    width: 100%;
    border-collapse: collapse;

`;

export const HeadCol = styled.th`
    color: #999999;
    width: 150px;
    text-align: start;
    border-left: 1px solid grey;
    padding: 10px;

`;



export const TRow = styled.tr `
    border-bottom: 1px solid grey;


`;

interface TDProps {
    bordo?: boolean;
  }

export const TD = styled.td<TDProps>`
    padding: 20px 10px;
    border-left: ${props => props.bordo ? "" : "1px solid grey"};

`;

export const ShopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;


`;

export const Tot = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;

`;

export const Num = styled.span`
    text-align: end;
    display: block;
    width: 141px;    
`;

export const UnderLine = styled.div`
    border-bottom: 1px solid #5d5d5d;
    width: 250px;
    position: relative;
    bottom: 4px;

`;
