import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

App {

    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101' 

}

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
 
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 16px;
  }
  img {
    width:100%;
    height:270px;
    display: block;
  }
  
  header {
      display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  
  }

  nav {
    display: flex;
  }
  
a{
 text-decoration: none;
 
}
a&active {
    color: #ff4500;
  }

  span {
    display: bloc;
    text-decoration: none;
    padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
   fill: black;
  font-weight: 500;
  }

  link{
      display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  }

  link:hover {
    color: #ff4500;
  }

  text{
    margin-top: 10px;
    font-weight: 500;
  }

  textReviews{
    margin-top: 10px;
  }
  
`;
