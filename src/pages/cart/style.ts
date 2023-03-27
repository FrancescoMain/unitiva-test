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
    position: relative;
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

export const RemoveButton = styled.button `
    border: none;
    background-color: white;
    color: #b95151;
    cursor: pointer;
    position: absolute;
    right: 20px;


`;

export const Del = styled.span `
    border: 1px #b95151 solid;
    border-radius: 50%;
    padding: 1px 3px;
`;

export const AddButton = styled.button `
    border: none;
    background-color: white;
    color: #b95151;
    cursor: pointer;
    position: absolute;
    right: 20px;
    color: #8e9bb9;

`;

export const Add = styled.span `
    border: 1px #8e9bb9 solid;
    border-radius: 50%;
    padding: 1px 3px;
`;