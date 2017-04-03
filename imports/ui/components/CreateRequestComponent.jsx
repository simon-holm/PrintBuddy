import React from "react";

export default class CreateRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            range: 50,
        }
    }
    componentDidMount() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year
            format: 'yyyy-mm-dd',
            today: "Today"
        });
    }
    changeRange() {
        const range = this.refs.range.value;
        this.setState({
            range
        });
    }
    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l6 xl4 offset-m2 offset-l3 offset-xl4 create-request">
                    <h3 className="center-align">Create Request</h3>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row file-row">
                            <div className="file-field input-field col s10">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload the document" />
                                </div>
                            </div>
                            <div className="col s2">
                            </div>
                        </div>
                        <div className="switch center-align">
                            <label className="first-switch">
                                Black/White
                                <input type="checkbox" />
                                <span className="lever"></span>
                                Color
                            </label>
                        </div>
                        <div className="switch center-align margin-bottom-after">
                            <label className="second-switch">
                                No Delivery
                                <input type="checkbox" />
                                <span className="lever"></span>
                                Home Delivery
                            </label>
                        </div>
                        <p className="center-align">Set a max distance</p>
                        <div className="row margin-bottom-after">
                            <p className="center-align col s2">{this.state.range} m</p>
                            <p className="range-field col s8">
                                <input onChange={this.changeRange.bind(this)} ref="range" type="range" id="test5" min="1" max="10000" />
                            </p>
                        </div>
                        <p className="center-align">Set a last date for pick-up/delivery</p>
                        <div className="row">
                            <div className="col s8 offset-s2 input-field inline">
                                <input type="date" id="date" className="datepicker" />
                                <label htmlFor="date">Date</label>
                            </div>
                        </div>
                        <div className="row margin-bottom-after">
                            <div className="input-field inline col s8 offset-s2">
                                <input id="number" type="number" className="validate" />
                                <label htmlFor="number">Offer</label>
                            </div>

                        </div>
                        <div className="center-align">
                            <button className="btn-large waves-effect waves-light margin-bottom-after" type="submit" name="action">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}