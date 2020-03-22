import React from 'react';
import TextEffect from '../TextEffect';
import './skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div style={{ marginBottom: 100, textAlign: 'center' }}>
                    <TextEffect font="Barrio" size="4" delay="300" text="Skills" />
                </div>
                {/* <div style={{ marginBottom: 100 }}></div> */}
                <div class="ui divided four column grid">
                    <div class="row">
                        <div class="column">
                            <div className="icon">
                                <i class="devicon-nodejs-plain-wordmark "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-c-plain "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-mongodb-plain-wordmark"></i>
                            </div>
                        </div>
                        <div class="column">
                            <div className="icon">
                                <i class="devicon-react-original-wordmark"></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-cplusplus-plain "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-amazonwebservices-plain-wordmark "></i>
                            </div>
                        </div>
                        <div class="column">
                            <div className="icon">
                                <i class="devicon-javascript-plain "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-java-plain-wordmark "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-postgresql-plain-wordmark"></i>
                            </div>
                        </div>
                        <div class="column">
                            <div className="icon">
                                <i class="devicon-python-plain-wordmark "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-django-plain "></i>
                            </div>
                            <div className="icon">
                                <i class="devicon-ubuntu-plain-wordmark "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
