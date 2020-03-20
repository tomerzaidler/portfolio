import React from 'react';

import HomeHeader from '../HomeHeader';
import Button from '../Button';

const styles = {
    flexcontainer: {
        marginTop: 150,
        display: 'flex',
        flexDirection: 'row'
    }
};

class Home extends React.Component {
    delay = 50;

    setDelay = letter => {
        this.delay += 150;
        return <HomeHeader delay={this.delay} text={letter} />;
    };

    render() {
        return (
            <div className="ui container" style={{ textAlign: 'center' }}>
                <div className="ui text container" style={{ marginTop: 200, fontStyle: 'oblique' }}>
                    <div className="ui grid" style={styles.flexcontainer}>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            {Array.from('Hello').map(letter => {
                                return this.setDelay(letter);
                            })}
                        </div>

                        <div className="row" style={{ justifyContent: 'center' }}>
                            {Array.from("I'm Tomer Zaidler").map(letter => {
                                return this.setDelay(letter);
                            })}
                        </div>

                        <div className="row" style={{ justifyContent: 'center', width: 2000 }}>
                            {Array.from('a full-stack web developer').map(letter => {
                                return this.setDelay(letter);
                            })}
                        </div>
                    </div>
                </div>
                <div className="ui grid" style={{ marginTop: 150, justifyContent: 'space-around' }}>
                    <div className="row" style={{ marginLeft: 350, marginRight: 350 }}>
                        <Button delay="7600" name="github" link="https://github.com/tomerzaidler"></Button>
                        <Button delay="7600" name="linkedin"></Button>
                        <Button delay="7600" name="facebook"></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
