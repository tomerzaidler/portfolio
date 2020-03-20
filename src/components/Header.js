/* eslint-disable default-case */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectPage } from '../actions';

class Header extends React.Component {
    setItemActive = e => {
        this.props.selectPage(e.target.name);
    };

    render() {
        return (
            <div className="ui secondary pointing menu inverted" style={{ border: 0, fontSize: 25 }}>
                <Link
                    name="home"
                    to="/home"
                    className={this.props.activeItem === 'home' ? 'item active' : 'item'}
                    onClick={this.setItemActive}
                    style={{ color: 'rgba(255, 255, 255, 0.863)', fontFamily: 'Sofia' }}
                >
                    Home
                </Link>
                <Link
                    name="about"
                    to="/about"
                    className={this.props.activeItem === 'about' ? 'item active' : 'item'}
                    onClick={this.setItemActive}
                    style={{ color: 'rgba(255, 255, 255, 0.863)', fontFamily: 'Sofia' }}
                >
                    About
                </Link>
                <Link
                    name="skills"
                    to="/skills"
                    className={this.props.activeItem === 'skills' ? 'item active' : 'item'}
                    onClick={this.setItemActive}
                    style={{ color: 'rgba(255, 255, 255, 0.863)', fontFamily: 'Sofia' }}
                >
                    Skills
                </Link>
                <div className="right menu">
                    <Link
                        name="cv"
                        to="/cv"
                        className={this.props.activeItem === 'cv' ? 'item active' : 'item'}
                        onClick={this.setItemActive}
                        style={{ color: 'rgba(255, 255, 255, 0.863)', fontFamily: 'Sofia' }}
                    >
                        CV
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { activeItem: state.header.activeItem };
};

export default connect(mapStateToProps, { selectPage })(Header);
