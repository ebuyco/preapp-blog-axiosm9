import styled from 'styled-components';

const NPostStyle = styled.div`
   border: 1px solid #eee;
   box-shadow: 0 2px 3px #ccc;
   margin: 20px auto;
   text-align: center;
   width: 80%;
    label {
        display: block;
        font-weight: bold;
        margin: 10px auto;
        text-align: center;
    }
    input, 
    textarea, 
    select {
        border: 1px solid black;
        box-sizing: border-box;
        display: block;
        font: inherit;
        margin: auto;
        outline: none;
        width: 80%;
    }
    button {
        background-color: transparent;
        border: 1px solid #fa923f;
        color: #fa923f;
        cursor: pointer;
        font: inherit;
        margin: 5px 0;
        padding: 10px;
        &:hover, &:active{
         background-color: #fa923f;
         color: #ffffff;       
        }
    }
`;


export default NPostStyle;
