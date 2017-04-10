import React from 'react';

export default class AboutComponent extends React.Component {

    render() {
        return(
            <div>
                <div className="slider fullscreen">
                    <ul className="slides">
                        <li>
                            <img src="https://static.pexels.com/photos/273238/pexels-photo-273238.jpeg" />
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light black-text text-lighten-3">Here's our small slogan..</h5>

                                <a className="waves-effect waves-light btn">Read More</a>
                            </div>
                        </li>
                        <li>
                            <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg" />
                            <div className="caption left-align">
                                <h3>Left Aligned Caption!</h3>
                                <h5 className="light black-text text-lighten-3">Here's our small slogan..</h5>
                                <a className="waves-effect waves-light btn">Read more</a>
                            </div>

                        </li>
                        <li>
                            <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light black-text text-lighten-3">Here's our small slogan..</h5>
                                <a className="waves-effect waves-light btn">Read more</a>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
