import styled from 'styled-components';

const FPostStyle = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 20px auto;
    text-align: center;
    width: 80%;
`;

const EditStyle = styled.div`
    label{
        color: grey;
        display: block;
     }
     button {
         background-color: transparent;
         border: none;
         color: #fa923f;
         cursor: pointer;
         outline: none;
         &:hover,&:active{
             color: #521751;
         }
     }
`;

const BtnDelete = styled.button`
    color: red;
    &:hover, &:active{
        color: darkred;
    }
`;

export { BtnDelete, EditStyle, FPostStyle };
