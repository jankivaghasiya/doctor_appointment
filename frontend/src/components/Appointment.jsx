import React, { Component } from "react";
import Doctorinfo from "./DoctorInfo";
import Slotsinfo from "./SlotsInfo";
import { withRouter } from "react-router";

class Appointment extends Component {
    render() {
        return (
            <div className="appointment">
                <Doctorinfo doctorId={this.props.match.params.doctorId} />
                <Slotsinfo
                    doctorId={this.props.match.params.doctorId}
                    userId={this.props.userId}
                />
            </div>
        );
    }
}

export default withRouter(Appointment);
