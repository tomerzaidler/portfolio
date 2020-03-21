import React from 'react';
import TextEffect from '../TextEffect';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div style={{ marginBottom: 120, textAlign: 'center' }}>
                    <TextEffect font="Barrio" size="4" delay="300" text="About me" />
                </div>
                <div className="ui divider" style={{ marginBottom: 40 }}></div>
                <div className="abouttext">
                    <div className="ui center aligned container">
                        <p className="info">
                            Born in Israel and raised in Rishon Le Zion. My career began in IBM-Trusteer as a NOC
                            Engineer, Today my role is a full-stack developer at ArtCode Labs. Since childhood I
                            love to deal with computers, from Elementary School until Today.
                        </p>
                        <p className="info">
                            * I'm a student with outstanding self-learning skills,highly motivated, responsible and
                            reliable *
                        </p>
                        <div className="info">* I'm a TEAMPLAYER, BORN LEADER, AFFABLE. Tet high school *</div>
                        <div className="info">* Study - 2nd year Computer Science B.Sc Student at H.I.T *</div>
                        <div className="info">* Finished Computer Science profession at high school *</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
