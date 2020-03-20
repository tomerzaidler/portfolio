import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './homeheader.css';

const styles = {
    flexcontainer: {
        marginTop: 150,
        display: 'flex',
        flexDirection: 'row'
    }
};

const setDelay = (letter, style) => {
    return (
        <div className="homeheader" style={{ margin: '10px' }}>
            <div>
                <animated.div style={style}>{letter}</animated.div>
            </div>
        </div>
    );
};

const HomeHeader = props => {
    const { transform, opacity, freq, scale } = useSpring({
        from: { scale: 100, opacity: 0, transform: 'scale(0.1)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(3)', freq: '0.0, 0.0' },
        fontSize: '2em',
        delay: props.delay,
        config: { duration: 150 }
    });
    const style = { transform, opacity, freq, scale };
    return (
        <div className="" style={{ justifyContent: 'center' }}>
            {Array.from(props.text).map(letter => {
                return setDelay(letter, style);
            })}
        </div>
    );
};

export default HomeHeader;
