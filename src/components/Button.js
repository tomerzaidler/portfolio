/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mouseOver, mouseOut } from '../actions';
import { linkedin, facebook, github } from '../icons';
import { useSpring, animated } from 'react-spring';

const chooseLogo = logoName => {
    // eslint-disable-next-line default-case
    switch (logoName) {
        case 'linkedin':
            return { logo: linkedin, link: 'https://www.linkedin.com/in/tomer-zaidler-ab5a91183/' };
        case 'github':
            return { logo: github, link: 'https://github.com/tomerzaidler' };
        case 'facebook':
            return { logo: facebook, link: 'https://www.facebook.com/tomer.zaidler/' };
    }
};

const Button = props => {
    const [hover, setHover] = useState(false);

    const { transform, opacity, freq, scale } = useSpring({
        from: { scale: 10, opacity: 0, transform: 'scale(0.7)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(1.5)', freq: '0.0, 0.0' },
        fontSize: '2em',
        delay: props.delay,
        config: { duration: 500 }
    });
    let style = { transform, opacity, freq, scale };
    return (
        <animated.div onMouseOut={() => setHover(false)} onMouseOver={() => setHover(true)} style={style}>
            <a href={chooseLogo(props.name).link}>
                <img
                    src={chooseLogo(props.name).logo}
                    style={hover ? { width: '60px', height: '60px' } : { width: '50px', height: '50px' }}
                />
            </a>
        </animated.div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const buttonName = ownProps.name;
    return { hover: state[buttonName].hover };
};

export default connect(mapStateToProps, { mouseOver, mouseOut })(Button);
