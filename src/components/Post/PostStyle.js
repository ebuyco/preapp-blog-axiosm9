import styled from 'styled-components';

const PostStyle = styled.div`
   border: 1px solid #eee;
   box-shadow: 0 2px 3px #ccc;
   box-sizing: border-box;
   cursor: pointer;
   padding: 16px;
   text-align: center;
   width: 100px;
    &:hover{
        background-color: #C0DDF5;
        &:active {
         background-color: #C0DDF5;       
        }    
    }
`;

const Author = styled.div`
    color: #ccc;
    margin: 16px 0;

`;
export { Author, PostStyle };
