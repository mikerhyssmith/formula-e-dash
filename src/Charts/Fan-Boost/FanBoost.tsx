import React, { PureComponent } from 'react';
import Panel from '../../Components/Panel/Panel';

import "./FanBoost.scss"

export interface Props {
    
}
 
export interface State {
    
}
 
class FanBoost  extends PureComponent<Props, State> {
    render() { 
        return (  
            <div className="fan-boost"> 
                <Panel title={"Fan Boost"}>
                    Fan Boost
                </Panel>
            </div>
        );
    }
}
 
export default FanBoost;