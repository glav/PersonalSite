import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOpenState = this.toggleOpenState.bind(this);
        this.state = { openState: false};
    }

    toggleOpenState() {
        this.setState({ openState: !this.state.openState });
    };

    render() {
        return (
            <div>
                <Header toggleOpenState={this.toggleOpenState} />
                <Sidebar openState={this.state.openState} />
            </div>
        )
    };
};

export default Nav