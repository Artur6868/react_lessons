import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className='div d-flex'>
                  <i className='icon-tg-logo'></i>
                  <p className='p'>
                     <a className='link' href='https://telegram.org/'>Telegram</a>
                     <a className='linkOne' href='/'>Next ></a>
                  </p>
               </div>
        </div>
        )
    }
}