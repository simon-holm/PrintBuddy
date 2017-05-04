import React from 'react';

import { Link, IndexLink } from 'react-router';
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.popLoginModal = this.popLoginModal.bind(this);
        this.popRegisterModal = this.popRegisterModal.bind(this);
    }

    popLoginModal() {
        $('#register-modal').closeModal();
        $('#login-modal').openModal({
            inDuration: 100,
            outDuration: 100,
        });
    }
    popRegisterModal() {
        $('#login-modal').closeModal();
        $('#register-modal').openModal({
            inDuration: 100,
            outDuration: 100,
        });
        $('#register-modal').animate({
            scrollTop: 0
        }, 10);
    }

    render() {
        return (
            <div className="start-page">
                <div className="row">
                <div className="col s12 m12 l12 grid-example content-first" id="first-row">
                        <nav className="start-nav hide-on-small-only">
                            <div className="nav-wrapper nav-container">
                                <a href="#" className="brand-logo"> PRINTBUDDY</a>
                                <ul className="right">
                                    <li><a  onClick={this.popLoginModal}>LOG IN</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="welcome">
                        <h4 className="slogan">Welcome to PrintBuddy</h4>
                        <a onClick={this.popRegisterModal} className="waves-effect waves-light btn-large sign-up">SIGN UP</a>
                        <h6><a onClick={this.popLoginModal}><strong>Already have an account? Sign in here.</strong></a></h6>

                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#second-row"></a>
                        </div>
                        </div>

                    </div>
                    <div className="info-wrapper">
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="second-row">
                            <div className="text-wrapper left">
                                <h4>Get your document delivered</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right ">
                            <div className="img-wrapper right hide-on-med-and-down">
                                <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg" />
                            </div>
                            <div className="img-wrapper hide-on-large-only">
                                <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left " id="third-row">
                            <div className="img-wrapper left hide-on-med-and-down">
                                <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right">
                            <div className="text-wrapper right">
                                <h4>All over the world</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second hide-on-large-only " id="third-row">
                            <div className="img-wrapper ">
                                <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                            </div>
                        </div>

                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="fourth-row">
                            <div className="text-wrapper left">
                                <h4>Responsive design</h4>
                                <p>Nowadays it's becoming more and more common to use different devices to handle your ”ärenden” on Internet.
                                PrintBuddy is therefore developed as a responsive website to make it possible for you to use our service regardless of which device you are using.</p>
                            <br/>
                            <br/>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right ">
                            <div className="img-wrapper right" >
                                <img src="https://static.pexels.com/photos/6508/nature-laptop-outside-macbook.jpg" />
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                <div id="login-modal" className="modal login-modal">
                    <div className="modal-content">
                        <i className="material-icons cancel-icon modal-action modal-close ">clear</i>
                        <LoginContainer />
                        <div className="breakit row">
                            <div className="line-break col s10 offset-s1"></div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                                <div>Don't have an Account?</div>
                                <a onClick={this.popRegisterModal}>Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="register-modal" className="modal register-modal ">
                    <div id="scrollbar">
                        <div className="modal-content">
                            <i className="material-icons cancel-icon modal-action modal-close ">clear</i>
                            <RegisterContainer />
                            <div className="breakit row">
                                <div className="line-break col s10 offset-s1"></div>
                            </div>
                            <div className="row">
                                <div className="col s10 offset-s1" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                                    <div>Already have an Account?</div>
                                    <a onClick={this.popLoginModal}>Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
