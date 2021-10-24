import React, { Component } from "react";
import Doctorinfo from "./DoctorInfo";
import Slotsinfo from "./SlotsInfo";
import { withRouter } from "react-router";

class Appointment extends Component {
    constructor(props) {
        super(props);
        const abrotCtrl = new AbortController();
        this.state = {
            doctor: null,
            slotsKey: Date.now(),
            abrotCtrl: abrotCtrl,
        };
    }

    remountSlots = () => {
        this.setState({ slotsKey: Date.now() });
    };

    componentDidMount = () => {
        fetch(`/api/doctors/${this.props.match.params.doctorId}`, {
            signal: this.state.abrotCtrl.signal,
        })
            .then((res) => {
                if (res.status === 400) {
                    this.props.history.push("/not-found");
                } else {
                    return res.json();
                }
            })
            .then((result) => {
                if (result === null) {
                    this.props.history.push("/not-found");
                } else {
                    this.setState({ doctor: result });
                }
            })
            .catch(console.log);
    };

    componentWillUnmount = () => {
        this.state.abrotCtrl.abort();
    };

    render() {
        return (
            <div className="appointment">
                {this.state.doctor === null ? (
                    <div className="loading">
                        Loading Doctor's Information...
                    </div>
                ) : (
                    <React.Fragment>
                        <Doctorinfo doctor={this.state.doctor} />
                        <Slotsinfo
                            key={this.state.slotsKey}
                            doctorId={this.state.doctor._id}
                            loginInfo={this.props.loginInfo}
                            remount={this.remountSlots}
                        />
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default withRouter(Appointment);
