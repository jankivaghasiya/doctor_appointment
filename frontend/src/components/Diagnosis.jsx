import React, { Component } from "react";
import headers from "../token.js";

class Diagnosis extends Component {
    state = {
        text: "",
        isStarted: false,
        isLoaded: false,
        sex: "male",
        age: "",
        evidence: [],
        question: null,
        ans: "unknown",
        conditions: [],
        new_symptom: "",
        choice_id: "",
        controller: new AbortController(),
    };

    handleChange = (event, property) => {
        this.setState({ [property]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isStarted: true, isLoaded: false });

        fetch("https://api.infermedica.com/v3/parse", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                text: this.state.text,
                age: {
                    value: parseInt(this.state.age),
                },
            }),
            signal: this.state.controller.signal,
        })
            .then((res) => {
                if (res.status === 400) {
                    res.json().then((err) => {
                        return new Error(err.message);
                    });
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                console.log(data);
                const { mentions } = data;
                let evidence = mentions.map((m) => {
                    let evd = {
                        id: m.id,
                        choice_id: m.choice_id,
                        source: "initial",
                    };
                    return evd;
                });
                this.setState({ evidence });
                this.processAnswer();
            })
            .catch(console.log);
    };

    selectAns = (ans) => {
        let { evidence } = this.state;
        evidence.push({
            id: this.state.new_symptom,
            choice_id: ans,
        });
        this.setState({ evidence });
        this.processAnswer();
    };

    processAnswer = () => {
        const body = {
            sex: this.state.sex,
            age: {
                value: parseInt(this.state.age),
            },
            evidence: this.state.evidence,
            extras: {
                disable_groups: true,
            },
        };

        fetch("https://api.infermedica.com/v3/diagnosis", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
            signal: this.state.controller.signal,
        })
            .then((res) => {
                if (res.status === 400) {
                    res.json().then((err) => {
                        throw new Error(err.message);
                    });
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    conditions: data.conditions,
                    isLoaded: true,
                });
                if (data.question) {
                    this.setState({
                        new_symptom: data.question.items[0].id,
                        question: data.question.text,
                    });
                } else {
                    this.setState({ question: null });
                }
            })
            .catch(console.log);
    };

    componentWillUnmount = () => {
        this.state.controller.abort();
    };

    render() {
        return (
            <div className="diagnosis">
                <div className="diagnosis-heading">
                    Enter Symptoms, Gender and Age below
                </div>
                <form
                    action=""
                    className="diagnosis-form"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        required
                        className="diagnosis-input"
                        placeholder="symptoms/problems Example:I have cough since a week"
                        type="text"
                        onChange={(event) => this.handleChange(event, "text")}
                    />

                    <select
                        className="diagnosis-input"
                        id="gender-selection"
                        defaultValue={"male"}
                        onChange={(event) => this.handleChange(event, "sex")}
                    >
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                    <input
                        required
                        className="diagnosis-input"
                        type="number"
                        placeholder="Age"
                        name="age"
                        id="age"
                        min="1"
                        max="130"
                        onChange={(event) => this.handleChange(event, "age")}
                    />
                    <input className="submit" type="submit" value="submit" />
                </form>

                {this.state.isStarted &&
                    (this.state.isLoaded === false ? (
                        <div className="loading">Loading...</div>
                    ) : (
                        <div className="diagnosis-result">
                            {this.state.conditions[0] && (
                                <div className="conditions-section">
                                    <div className="diagnosis-heading">
                                        Estimated condition/s
                                    </div>
                                    <div className="conditions">
                                        {this.state.conditions.map(
                                            (c, index) => (
                                                <div
                                                    className="condition"
                                                    key={index}
                                                >
                                                    <div>name: {c.name}</div>
                                                    <div>
                                                        common name:{" "}
                                                        {c.common_name}
                                                    </div>
                                                    <div>
                                                        probability:{" "}
                                                        {c.probability * 100}%
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                            {this.state.question && (
                                <div className="question-secion">
                                    <div className="diagnosis-heading">
                                        Answer the question to get more precise
                                        estimate
                                    </div>
                                    <div className="question">
                                        {this.state.question}
                                    </div>
                                    <div className="answer-options">
                                        <button
                                            className="diagnosis-ans submit"
                                            onClick={() =>
                                                this.selectAns("present")
                                            }
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className="diagnosis-ans submit"
                                            onClick={() =>
                                                this.selectAns("absent")
                                            }
                                        >
                                            No
                                        </button>
                                        <button
                                            className="diagnosis-ans submit"
                                            onClick={() =>
                                                this.selectAns("unknown")
                                            }
                                        >
                                            Don't Know
                                        </button>
                                    </div>
                                </div>
                            )}
                            {!this.state.conditions[0] &&
                                !this.state.question && (
                                    <div className="no-data">
                                        Could not make any estimates using
                                        provided inputs. Please try using more
                                        related and meaningful words.
                                    </div>
                                )}
                        </div>
                    ))}
            </div>
        );
    }
}

export default Diagnosis;
