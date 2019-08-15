import React, {Component} from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    red: '#FF0000',
    lightBlue: '#001affab',
    black: '#393939',
    grey: '#3a3a3a',
    midNightBlue: '#191970',
    mediumBlue: '#0000CC',
    lightgrey: '#1e1e1e',
    offwhite: '#ededed',
    maincolor: '#abcdef',
    maxWidth: '1400px',
    bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};
const StyledPage = styled.div `
background:white;
color:black;
`;

injectGlobal `
  
@font-face{
  font-family: 'radnika_next';
  src:url("/static/radnikanext-medium-webfont.woff2")
  format('woff2');
  font-weight: normal;
  font-style: normal;
} 

html {
box-sizing: border-box;
font-size: 10px;
}

*,*:before,*:after{
box-sizing: inherit;

}

body{
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
    max-width: ${props => props.theme.maxWidth};


}
a{
    text-decoration: none;
    color: ${theme.midNightBlue};
}


`;
const Inner = styled.div `
  max-width: ${ (props) => props.theme.maxWidth};
  margin: 0 , auto;
  padding:1rem;
  text-align: center;
  width:90%;
  margin-left:auto;
  margin-right:auto;

  background: ${ (props) => props.theme.maincolor};

`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta/>
                    <Header/>
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}
export default Page;