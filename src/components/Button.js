/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
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
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2 + 20];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const getDesign = (style, transform) => {
    return { ...style, transform };
};
const Button = props => {
    // const [hover, setHover] = useState(false);

    const { transform, opacity, freq, scale } = useSpring({
        from: { scale: 10, opacity: 0, transform: 'scale(0.7)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(1.5)', freq: '0.0, 0.0' },
        fontSize: '2em',
        delay: props.delay,
        config: { duration: 500 }
    });
    let style = { transform, opacity, freq, scale };
    const [propsDesigne, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 5550, friction: 140 }
    }));
    return (
        <div
            onMouseOver={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            onMouseOut={() => set({ xy: [0, 0] })}
        >
            <animated.div style={{ style }}>
                <animated.div style={getDesign(style, propsDesigne.xy.interpolate(trans1))}>
                    <a href={chooseLogo(props.name).link}>
                        <img src={chooseLogo(props.name).logo} style={{ width: '50px', height: '50px' }} />
                    </a>
                </animated.div>
            </animated.div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const buttonName = ownProps.name;
    return { hover: state[buttonName].hover };
};

export default connect(mapStateToProps, { mouseOver, mouseOut })(Button);
