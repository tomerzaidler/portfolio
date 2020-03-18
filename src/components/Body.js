import React from 'react';

class Body extends React.Component {
    render() {
        return <div className="ui container">{this.props.section}</div>;
    }
}

export default Body;
