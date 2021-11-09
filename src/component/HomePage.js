import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import Navbar from './Navbar'
import TopContainer from './TopContainer.js'


class Home extends Component {
    render() {
        return (
            <div class="app">
                <Navbar></Navbar>
                <TopContainer/>
            </div>
        );
    }
}

export default Home;