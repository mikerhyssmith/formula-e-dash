import React, { PureComponent } from "react";

import "./Header.scss";

export interface IHeaderProps {

}

export interface IHeaderState {

}

class Header extends PureComponent<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <div className="header__spacer"></div>
                <span className="header__title">Formula E Dashboard</span>
            </header>
        );
    }
}

export default Header;