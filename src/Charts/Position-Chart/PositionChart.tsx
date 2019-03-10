import React, { PureComponent } from 'react';
import Panel from '../../Components/Panel/Panel';

import "./PositionChart.scss";

export interface Props {
    
}
 
export interface State {
    
}
 
class PositionChart extends PureComponent<Props, State> {
    render() { 
        return ( 
            <div className="position-chart"> 
                <Panel title={"Position Chart"}>
                    Position Chart
                </Panel>
            </div>
         );
    }
}
 
export default PositionChart;