/* eslint-disable default-case */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectPage } from '../actions';

class Header extends React.Component {
    setItemActive = e => {
        console.log(e.target);
        this.props.selectPage(e.target.name);
    };

    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link
                    name="home"
                    to="/home"
                    className={this.props.activeItem === 'home' ? 'item active' : 'item'}
                    onClick={this.setItemActive}
                    color="white"
                >
                    Home
                </Link>
                <Link
                    name="about"
                    to="/about"
                    className={this.props.activeItem === 'about' ? 'item active' : 'item'}
                    onClick={this.setItemActive}
                >
                    About
                </Link>
                <Link
                    name="skills"
                    to="/skills"
                    className={this.props.activeItem === 'skills' ? 'item active' : 'item'}
                    onClick={this.setItemActive}
                >
                    Skills
                </Link>
                <div className="right menu">
                    <Link
                        name="cv"
                        to="/cv"
                        className={this.props.activeItem === 'cv' ? 'item active' : 'item'}
                        onClick={this.setItemActive}
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
