import React, { Component } from "react";

class Doctorinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: null,
        };
    }

    componentDidMount = () => {
        fetch(`/api/doctors/${this.props.doctorId}`)
            .then((res) => res.json())
            .then((result) => this.setState({ doctor: result }));
    };

    render() {
        const { doctor } = this.state;
        console.log(doctor);
        return (
            <div className="doctor-info">
                {doctor === null ? (
                    <div className="loading">Loading Doctor's Information...</div>
                ) : (
                    <div>
                        <h2 className="doctor-name">
                            {`Dr. ${doctor.firstName} ${doctor.lastName}`}
                        </h2>
                        <div className="doctor-attribute">
                            <span>Speciality: </span>
                            <span>{doctor.speciality}</span>
                        </div>
                        <div className="doctor-attribute">
                            <span>Experience: </span>
                            <span>{`${doctor.experience} Years`}</span>
                        </div>
                        <div className="doctor-attribute">
                            <span>Degree: </span>
                            <span>{doctor.degree}</span>
                        </div>
                        <div className="doctor-attribute">
                            <span>Consultation Fees: </span>
                            <span>{`${doctor.consultationFees} Rupees`}</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Doctorinfo;
