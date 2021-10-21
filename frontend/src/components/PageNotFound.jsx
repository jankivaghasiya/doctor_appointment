import React, { Component } from 'react';

class Pagenotfound extends Component {
    render() {
        return (
            <div className="no-page">
                <img src={require("../asset/error.png").default} alt="" />
            </div>
        );
    } 
}

export default Pagenotfound;