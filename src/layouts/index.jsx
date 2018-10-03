import React from 'react'
import Helmet from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'
import 'font-awesome/css/font-awesome.css'
import './all.sass'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import emergence from 'emergence.js'

class MainLayout extends React.Component {
    componentDidMount() {
        document.getElementsByTagName('body')[0].classList.add('body--loaded');
        emergence.init({ reset: false, elemCushion: .3 });
    }

    render() {
        return (
            // <ParallaxProvider> 
                <div className="site">
                    <Helmet title="Icon Technologies">
                        <meta name="description" content="Icon Technologies solves mission critical information technology problems with industry leading, experienced talent."/>
                    </Helmet>        
                    <Header currentPath={this.props.location.pathname}/>
                    
                    <div className="content-x">
                        {this.props.children}
                    </div>
    
                    <Footer/>
                </div>
            // </ParallaxProvider>
        )
    }
}

// MainLayout.propTypes = {
//   children: PropTypes.func,
// }

export default MainLayout
