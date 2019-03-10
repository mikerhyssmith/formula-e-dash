import React, { PureComponent } from 'react';

import "./LapChart.scss";

export interface Props {
    
}
 
export interface State {
    
}
 
class LapChart extends PureComponent<Props, State> {
    render() { 
        return ( 
            <div className="lap-chart">
                Lap Chart
            </div>
         );
    }
}
 
export default LapChart;