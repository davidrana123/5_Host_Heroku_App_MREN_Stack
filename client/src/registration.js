import React, { Component } from 'react';
import './registration.css'

class Registration extends Component {
    render() {
        return (
            <div className = "registration mb-0">
            <div className = 'registration-content text-center'>
            <h1 className = 'mx-lg-5 mx-3'>David</h1>
            <p className = 'mx-lg-5 mx-3 mb-lg-5 mb-3' id='announces'>
                Announces
            </p>
            <h2 className = 'mx-lg-5 mx-3 mb-2'>FUN CREATING INTELLIGENT ACTIVITIES</h2>
            <h2 className = 'mx-lg-5 mx-3 font-weight-bold mb-2'><span>1.DAVID</span> Online Quiz Contest</h2>
            <h2 className = 'mx-lg-5 mx-3 font-weight-bold mb-2'><span>2.DAVID</span> National Online Poster Making Contest</h2>
            <h2 className = 'mx-lg-5 mx-3 font-weight-bold mb-2'><span>3.DAVID</span> National Online Slogan Writing Contest</h2>
            <div className = 'registration-box w-50 mx-auto mt-5 p-4 text-center'>
                <h2>Registration Started</h2>
                <p>No Registration Fees</p>
                Down Side Registration from plz Fill and Submit
            </div>
            </div>
            </div>
        )
    }
}

export default Registration;

