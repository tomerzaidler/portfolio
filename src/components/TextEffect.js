import React from 'react';
import { useSpring, animated } from 'react-spring';

const TextEffect = props => {
    const { transform, opacity, freq, scale } = useSpring({
        from: { scale: 10, opacity: 0, transform: 'scale(0.7)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(1.0)', freq: '0.0, 0.0' },
        fontSize: '2em',
        delay: props.delay,
        config: { duration: 500 }
    });
    let style = { transform, opacity, freq, scale };
    return (
        <animated.div style={style}>
            <div style={{ marginTop: 130, marginLeft: 350, marginRight: 350, border: 1, borderColor: 'white' }}>
                <h3 style={{ fontFamily: 'Sofia', color: 'rgba(255, 250, 250, 0.863)' }}>{props.text}</h3>
            </div>
        </animated.div>
    );
};

export default TextEffect;
