import React, { Component } from 'react';
import './Body.css';
import Footer from '../Footer';
import Form from '../Form';


export default class Body extends Component{
    render(){
        return(
            <div className='body'>
                <Form />
                <Footer />
            </div>    
        )
    }
}