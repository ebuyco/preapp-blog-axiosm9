import styled from 'styled-components';

const BlogStyle = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
`;

const NavigationStyle = styled.nav`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
        width: 100%;
        li {
            display: inline-block;
            margin: 20px;

           a {
               color: #000000;
               text-decoration: none;
               &:hover, &:active {
                   color: #fa923f;
              }
              &.bbong, &.active{
                color: #fa923f;
              }
           } 
           
        }
    }

`;

export { NavigationStyle, BlogStyle };
