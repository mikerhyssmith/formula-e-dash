import React, { PureComponent } from 'react';
import Panel from '../../Components/Panel/Panel';

import "./AttackMode.scss";

export interface Props {
    
}
 
export interface State {
    
}
 
class AttackMode extends PureComponent<Props, State> {
    render() { 
        return ( 
            <div className="attack-mode">
                <Panel title={"Attack Mode"}>
                    Attack Mode
                </Panel>
            </div>
         );
    }
}
 
export default AttackMode;