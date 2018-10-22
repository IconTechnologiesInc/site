import React from 'react'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import './all.sass'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import emergence from 'emergence.js'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const Content = styled.div`${({ theme }) => css`
    background-color: ${theme.colors.white};
    margin-bottom: 445px;
    position: relative;
    z-index: 1;

    ${theme.responsiveness.mobile(`
        margin-bottom: 673px;
    `)}
`}
`

class MainLayout extends React.Component {
    componentDidMount() {
        document.getElementsByTagName('body')[0].classList.add('body--loaded');
        emergence.init({ reset: false, elemCushion: .3 });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="site">
                    <Helmet title="Icon Technologies">
                        <meta name="description" content="Icon Technologies solves mission critical information technology problems with industry leading, experienced talent."/>
                    </Helmet>        
                    <Header currentPath={this.props.location.pathname}/>
                    
                    <Content>
                        {this.props.children}
                    </Content>
    
                    <Footer/>
                </div>
            </ThemeProvider>
        )
    }
}

export default MainLayout
