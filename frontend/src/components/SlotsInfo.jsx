import React, { Component } from "react";

class Slotsinfo extends Component {
    constructor(props) {
        super(props);

        const current = new Date();
        let day_idx = current.getDay();
        let dt = ["", ""];
        let day = ["", ""];

        let next = new Date();
        next.setDate(current.getDate() + 1);

        if (0 === day_idx) {
            dt[0] = this.ddMmYyyy(next);
            day[0] = "Monday";

            next.setDate(next.getDate() + 1);
            dt[1] = this.ddMmYyyy(next);
            day[1] = "Tuesday";
        } else if (6 === day_idx) {
            dt[0] = this.ddMmYyyy(current);
            day[0] = "Saturday";

            next.setDate(next.getDate() + 1);
            dt[1] = this.ddMmYyyy(next);
            day[1] = "Monday";
        } else {
            dt[0] = this.ddMmYyyy(current);
            day[0] = current.toLocaleDateString("en-GB", { weekday: "long" });

            dt[1] = this.ddMmYyyy(next);
            day[1] = next.toLocaleDateString("en-GB", { weekday: "long" });
        }

        this.state = {
            isLoaded: false,
            date: dt,
            day: day,
            slots: [[], []],
            selection: {},
        };
    }

    ddMmYyyy = (today) => {
        let dd = today.getDate();
        let mm = today.getMonth() + 1;

        let yyyy = today.getFullYear();

        let ans = "";
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        ans = dd + "-" + mm + "-" + yyyy;
        return ans;
    };

    getCurrentTime = () => {
        let current = new Date();
        let current_time = current.toLocaleTimeString("it-IT", {
            hour: "numeric",
        });
        return current_time;
    };

    displayDate = (time) => {
        let display_time;
        if (time > 12) {
            display_time = (time % 12) + ":00 PM";
        } else {
            if (time === 12) display_time = "12:00 PM";
            else display_time = time + ":00 AM";
        }
        return display_time;
    };

    componentDidMount = () => {
        let promises = [];
        let slots = [
            [
                { startTime: 9, isAvl: false },
                { startTime: 10, isAvl: false },
                { startTime: 11, isAvl: false },
                { startTime: 12, isAvl: false },
                { startTime: 16, isAvl: false },
                { startTime: 17, isAvl: false },
                { startTime: 18, isAvl: false },
                { startTime: 19, isAvl: false },
            ],
            [
                { startTime: 9, isAvl: false },
                { startTime: 10, isAvl: false },
                { startTime: 11, isAvl: false },
                { startTime: 12, isAvl: false },
                { startTime: 16, isAvl: false },
                { startTime: 17, isAvl: false },
                { startTime: 18, isAvl: false },
                { startTime: 19, isAvl: false },
            ],
        ];

        for (let d = 0; d < 2; d++) {
            for (let s = 0; s < 8; s++) {
                if (
                    1 === d ||
                    new Date().getDay() === 0 ||
                    this.getCurrentTime() < slots[d][s].startTime
                ) {
                    promises.push(
                        fetch(
                            `/api/bookings/${this.props.doctorId}?date=${this.state.date[d]}&slot=${s}`
                        )
                            .then((res) => res.json())
                            .then((result) => {
                                if (result === null) slots[d][s].isAvl = true;
                            })
                    );
                }
            }
        }

        Promise.all(promises).then(() =>
            this.setState({ slots: slots, isLoaded: true })
        );
    };

    bookSlot = () => {
        this.closeModal();
        const { doctorId } = this.props;
        const userId = this.props.loginInfo.user._id;
        fetch(`/api/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                doctor: doctorId,
                patient: userId,
                date: this.state.date[this.state.selection.day],
                slot: this.state.selection.slot,
            }),
        })
            .then((res) => res.json())
            .then((data) => this.props.remount())
            .catch((err) => console.log(err));
    };

    selectSlot = (day, slot) => {
        let selection = {};
        if (this.props.loginInfo.isLoggedIn === false) {
            selection.message = "Please login first";
        } else {
            selection.day = day;
            selection.slot = slot;
            selection.message = "Confirm booking";
        }
        this.setState({ selection });
        let modal = document.getElementById("modal");
        modal.style.display = "flex";
    };

    closeModal = () => {
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    };

    render() {
        return (
            <div className="appointment">
                {this.state.isLoaded === false ? (
                    <div className="loading">Loading Available slots...</div>
                ) : (
                    <div className="slots-info">
                        <div className="colour-sign">
                            <div className="available slot sign"></div>
                            <p>available slots</p>
                            <div className="unavailable slot sign"></div>
                            <p>unavailable slots</p>
                        </div>
                        <div className="day-info">
                            <div className="date-day">
                                {this.state.date[0]} {this.state.day[0]}
                            </div>
                            <div className="slots">
                                {this.state.slots[0].map((s, index) => {
                                    if (s.isAvl) {
                                        return (
                                            <button
                                                className="available slot"
                                                key={index}
                                                onClick={() =>
                                                    this.selectSlot(0, index)
                                                }
                                            >
                                                {this.displayDate(s.startTime)}
                                            </button>
                                        );
                                    }
                                    return (
                                        <div
                                            className="unavailable slot"
                                            key={index}
                                        >
                                            {this.displayDate(s.startTime)}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="day-info">
                            <div className="date-day">
                                {this.state.date[1]} {this.state.day[1]}
                            </div>
                            <div className="slots">
                                {this.state.slots[1].map((s, index) => {
                                    if (s.isAvl) {
                                        return (
                                            <button
                                                className="available slot"
                                                key={index}
                                                onClick={() =>
                                                    this.selectSlot(1, index)
                                                }
                                            >
                                                {this.displayDate(s.startTime)}
                                            </button>
                                        );
                                    }
                                    return (
                                        <div
                                            className="unavailable slot"
                                            key={index}
                                        >
                                            {this.displayDate(s.startTime)}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
                <div id="modal" className="modal">
                    <div className="modal-content">
                        <div className="close-modal" onClick={this.closeModal}>
                            &times;
                        </div>
                        <p className="modal-message">
                            {this.state.selection.message}
                        </p>
                        {this.state.selection.slot ? (
                            <button
                                className="available slot"
                                onClick={this.bookSlot}
                            >
                                confirm
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slotsinfo;
