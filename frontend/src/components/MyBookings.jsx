import React, { Component } from "react";
import { withRouter } from "react-router";
import "./myBookings.css";

class Mybookings extends Component {
    state = {
        bookings: null,
        selection: null,
    };

    componentDidMount = () => {
        if (this.props.loginInfo.isLoggedIn === false) {
            this.props.history.push("/not-found");
            return;
        }
        fetch(`/api/bookings/get/${this.props.match.params.userId}`)
            .then((res) => {
                if (res.status === 400) {
                    this.props.history.push("/not-found");
                } else {
                    return res.json();
                }
            })
            .then((bookings) => {
                this.setState({ bookings });
            });
    };

    showModal = (index) => {
        this.setState({ selection: index });
        let modal = document.getElementById("modal");
        modal.style.display = "flex";
    };

    closeModal = () => {
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    };

    cancelBooking = () => {
        this.closeModal();
        const { bookings } = this.state;
        const id = bookings[this.state.selection]._id;
        fetch(`/api/bookings/cancel/${id}`, {
            method: "DELETE",
        })
            .then((data) =>
                // this.props.history.push(
                //     `/mybookings/${this.props.match.params.userId}`
                // )
                this.props.remount()
            )
            .catch((err) => console.log("unknown error occurred"));
    };

    render() {
        const time = [
            "09:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "04:00 PM",
            "05:00 PM",
            "06:00 PM",
            "07:00 PM",
        ];

        return (
            <div>
                {this.state.bookings === null ? (
                    <div className="loading">Loading</div>
                ) : (
                    <React.Fragment>
                        <h2 className="bookings-heading">Your Bookings</h2>
                        <div className="bookings">
                            {this.state.bookings.length === 0 ? (
                                <div className="loading">
                                    You have not booked any slots
                                </div>
                            ) : (
                                this.state.bookings.map((b, index) => (
                                    <div key={index} className="booking">
                                        <span>Date: {b.date}</span>
                                        <span>Time: {time[b.slot_no]}</span>
                                        <span>
                                            Doctor:{" "}
                                            {b.doctor.firstName +
                                                " " +
                                                b.doctor.lastName +
                                                " (" +
                                                b.doctor.speciality +
                                                ")"}
                                        </span>
                                        <div
                                            className="cancel"
                                            onClick={() =>
                                                this.showModal(index)
                                            }
                                        >
                                            cancel
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div id="modal" className="modal">
                            <div className="modal-content">
                                <div
                                    className="close-modal"
                                    onClick={this.closeModal}
                                >
                                    &times;
                                </div>
                                <p>Are you sure you want to cancel ?</p>
                                <button
                                    className="available slot"
                                    onClick={this.cancelBooking}
                                >
                                    yes
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default withRouter(Mybookings);
