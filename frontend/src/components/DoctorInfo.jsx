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
                abc
            </div>
        )
    }
}

export default Doctorinfo;