import React, { PureComponent } from 'react';
import Panel from '../../Components/Panel/Panel';

import "./Overtakes.scss"
export interface Props {
    
}
 
export interface State {
    
}
 
class Overtakes extends PureComponent<Props, State> {
    render() { 
        return ( 
            <div className="overtakes"> 
                <Panel title={"Overtakes"}>
                    Overtakes
                </Panel>
            </div>
         );
    }
}
 
export default Overtakes;