import React from 'react';
import HomeHeader from '../HomeHeader';
import Button from '../Button';
import TextEffect from '../TextEffect';

const styles = {
    flexcontainer: {
        marginTop: 150,
        display: 'flex',
        flexDirection: 'row'
    }
};

class Home extends React.Component {
    delay = 50;

    setDelay = (letter, delayNum, duration, index, firstDelay) => {
        this.delay += delayNum;
        return (
            <HomeHeader
                key={index}
                firstDelay={firstDelay}
                index={index}
                duration={duration}
                delay={this.delay}
                text={letter}
            />
        );
    };
    delayToZero = () => {
        this.delay = 50;
    };

    render() {
        return (
            <div className="ui container" style={{ textAlign: 'center' }}>
                <div className="ui text container" style={{ marginTop: 200 }}>
                    <div className="ui grid" style={styles.flexcontainer}>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            {Array.from('Hello').map((letter, index) => {
                                return this.setDelay(letter, 150, 900, index, 300);
                            })}
                        </div>

                        {this.delayToZero()}
                        <div className="row" style={{ justifyContent: 'center' }}>
                            {Array.from("I'm Tomer Zaidler").map((letter, index) => {
                                return this.setDelay(letter, 150, 200, index, 1800);
                            })}
                        </div>
                        {this.delayToZero()}
                        <div className="row" style={{ justifyContent: 'center', width: 2000 }}>
                            {Array.from('a full-stack web developer').map((letter, index) => {
                                return this.setDelay(letter, 100, 200, index, 4000);
                            })}
                        </div>
                    </div>
                </div>
                <TextEffect size="1.0" text="Contact" delay="7600" />
                <div className="ui grid" style={{ justifyContent: 'center' }}>
                    <div className="row" style={{ marginLeft: 350, marginRight: 350 }}>
                        <Button delay="7600" name="github"></Button>
                        <Button delay="7600" name="linkedin"></Button>
                        <Button delay="7600" name="facebook"></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
