import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render(){
        return(
            <div className='text-center'>
                <p className='Footer'>Welcome to the unofficial Telegram web-client.</p>
                <a href='/' className='linke'>Learn more</a>
                <p className='the-end'>© Телеграм.онлайн</p>
            </div>
        )
    }
}