import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import Navbar from '../component/header/Navbar.js'


class Home extends Component {
    render() {
        return (
           <Navbar></Navbar>
        );
    }
}

export default Home;