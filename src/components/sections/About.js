import React from 'react';
import TextEffect from '../TextEffect';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div style={{ marginBottom: 120, textAlign: 'center' }}>
                    <TextEffect size="4" delay="300" text="About me" />
                </div>
                <div className="ui divider" style={{ marginBottom: 40 }}></div>
                <div className="abouttext">
                    <div className="ui center aligned container">
                        <p style={{ color: 'white', fontSize: 25 }}>
                            Born in Israel and raised in Rishon Le Zion. I love to cook for my family and am a big
                            Hip-Hop fan. Since childhood I have loved to deal with computers, from Elementary
                            School until Today.
                        </p>
                        <div style={{ color: 'white', fontSize: 25, marginBottom: 10 }}>
                            I'm a student with outstanding self-learning skills,highly motivated, responsible and
                            reliable.
                        </div>
                        <div style={{ color: 'white', fontSize: 25, marginBottom: 10 }}>
                            I'm a TEAMPLAYER, BORN LEADER, AFFABLE. Tet high school.
                        </div>
                        <div style={{ color: 'white', fontSize: 25, marginBottom: 10 }}>
                            {' '}
                            Study - 2nd year Computer Science B.Sc Student at H.I.T.
                        </div>
                        <div style={{ color: 'white', fontSize: 25 }}>
                            Finished Computer Science profession at high school.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
