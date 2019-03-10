import React, { PureComponent } from 'react';

import "./Panel.scss";

export interface Props {
    title: string;
}
 
export interface State {
    
}
 
class Panel extends PureComponent<Props, State> {
    render() { 
        const { title, children } = this.props;
        return ( 
            <div className="panel">
                <div className="panel__header">
                    {title}
                </div>
                <div className="panel__content">
                    {children}
                </div>
            </div>
         );
    }
}
 
export default Panel;