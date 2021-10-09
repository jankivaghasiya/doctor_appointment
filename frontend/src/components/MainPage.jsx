import React, { Component } from 'react';
import Header from './Header';
import Category from './Catagory';
import Footer from './Footer';

class Mainpage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Category />
                <Footer />
            </div>
        );
    }
}

export default Mainpage;
