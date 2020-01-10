import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
    render(){
        return(
            <form className="App">
                <h6 className='font-weight-bold'>Sign in</h6>
                <p className='text'>Please choose your country and enter your full phone number.</p>
                <formgroup className='formgroup'>
                    <label className='label'>Country</label>
                   {/* <input className='input' type='email' value='Armenia'/>   */}
                   <select className='select'>
                       <option>Armenia</option>
                       <option>Germany</option>
                       <option>Russia</option>
                       <option>America</option>
                   </select>
                </formgroup>
                <formgroup className='formgroup'>
                    <label className='label'>Code</label>
                    <div className='boxInput d-flex'>
                        <input className='inputCode' type='text' value='+374'/>
                        <input className='inputTwo' type='text' placeholder='Phone Number'/>
                    </div>
                </formgroup>
            </form>
        )
    }
}