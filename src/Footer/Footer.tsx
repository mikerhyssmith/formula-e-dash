import React, { PureComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import "./Footer.scss";
export interface Props {
    
}
 

export interface State {
    
}
 

class Footer extends PureComponent<Props, State> {
    render() { 
        return ( 
            <footer className="footer">
                Made with <FontAwesomeIcon color={"#540D6E"} icon={faHeart} /> by <a href="https://twitter.com/mikerhyssmith">@mikerhyssmith</a>
            </footer>
         );
    }
}
 

export default Footer;