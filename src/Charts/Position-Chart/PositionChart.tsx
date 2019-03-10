import React, { PureComponent } from 'react';
import Panel from '../../Components/Panel/Panel';

import "./PositionChart.scss";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

export interface Props {

}

export interface State {

}

class PositionChart extends PureComponent<Props, State> {
    render() {
        const data = [
            {
                "name": "Lap 1",
                "BIRD": 1,
                "LOT": 2,
                "ABT": 3
            },
            {
                "name": "Lap 2",
                "BIRD": 1,
                "LOT": 2,
                "ABT": 3
            },
            {
                "name": "Lap 3",
                "BIRD": 2,
                "LOT": 3,
                "ABT": 1
            },
            {
                "name": "Lap 4",
                "BIRD": 3,
                "LOT": 2,
                "ABT": 1
            },
            {
                "name": "Lap 5",
                "BIRD": 3,
                "LOT": 1,
                "ABT": 2
            }
        ]
        return (
            <div className="position-chart">
                <Panel title={"Last 5 laps"}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}
                            margin={{ top: 10, right: 1, left: 1, bottom: 10 }}>
                            <XAxis stroke="#FFF" dataKey="name"/>
                            <YAxis stroke="#FFF" domain={[3,1]} interval={1} reversed={true}/>
                            <Tooltip />
                            <Legend />
                            <Line dot={false} strokeWidth={3} type="monotone" dataKey="BIRD" stroke="#C01C2E" />
                            <Line dot={false} strokeWidth={3} type="monotone" dataKey="LOT" stroke="#0080B5" />
                            <Line dot={false} strokeWidth={3} type="monotone" dataKey="ABT" stroke="#cca568" />
                        </LineChart>
                    </ResponsiveContainer>
                </Panel>
            </div>
        );
    }
}

export default PositionChart;