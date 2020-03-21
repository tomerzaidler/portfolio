import React from 'react';
import TextEffect from '../TextEffect';

import { tomerCV } from '../../files';
import './cv.css';

class Cv extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div style={{ marginBottom: 170, textAlign: 'center' }}>
                    <TextEffect font="Barrio" size="4" delay="300" text="Download CV" />
                </div>
                <div className="ui grid" style={{ justifyContent: 'center' }}>
                    <div className="row" style={{ marginLeft: 350, marginRight: 350 }}>
                        <div className="">
                            <a className="" href={tomerCV} download>
                                <button className="download">Download</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cv;
