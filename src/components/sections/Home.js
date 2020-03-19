import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ textAlign: 'center' }}>
                <div className="ui text container" style={{ marginTop: 200, marginLeft: 100 }}>
                    <h1 className="ui header">Hello, I'm Tomer Zaidler</h1>
                    <h1 className="ui header">I'm a full-stack web developer</h1>
                </div>
            </div>
        );
    }
}

export default Home;
