import React from 'react';
import { useSpring, animated } from 'react-spring';
import './homeheader.css';

const renderhelper = (letter, style, index) => {
    return (
        <div key={index} className="homeheader" style={{ margin: '10px' }}>
            <div>
                <animated.div style={style}>{letter}</animated.div>
            </div>
        </div>
    );
};

const HomeHeader = props => {
    const { transform, opacity, freq, scale } = useSpring({
        from: { scale: 20, opacity: 0, transform: 'scale(0.1)', freq: '2.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(3)', freq: '9.0, 3.0' },
        fontSize: '2em',
        delay: props.index === 0 ? props.firstDelay : props.delay + props.firstDelay,
        config: { duration: props.duration }
    });

    const style = { transform, opacity, freq, scale };
    return (
        <div className="" style={{ justifyContent: 'center' }}>
            {renderhelper(props.text, style, props.index)}
        </div>
    );
};

export default HomeHeader;
