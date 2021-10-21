import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Doctorinfo extends Component {
    render() {
        const { doctor } = this.props;
        return (
            <div className="doctor-info">
                <div>
                    <h2 className="doctor-name">
                        {`Dr. ${doctor.firstName} ${doctor.lastName}`}
                    </h2>
                    <div className="doctor-attribute">
                        <span className="doctor-attribute-key">Speciality: </span>
                        <span>{doctor.speciality}</span>
                    </div>
                    <div className="doctor-attribute">
                        <span className="doctor-attribute-key">Experience: </span>
                        <span>{`${doctor.experience} Years`}</span>
                    </div>
                    <div className="doctor-attribute">
                        <span className="doctor-attribute-key">Degree: </span>
                        <span>{doctor.degree}</span>
                    </div>
                    <div className="doctor-attribute">
                        <span className="doctor-attribute-key">Consultation Fees: </span>
                        <span>{`${doctor.consultationFees} Rupees`}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Doctorinfo);
