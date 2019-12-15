import React from 'react';

import './Filter.css';

const Filter = () => {
    return(
        <div className='filterdiv'>
            <h3 className='h3'>Search</h3>
            <input type='text'/>
            <button className='btn btn-danger'>Search</button>
            <hr/>
            <button className='btn btn-secondary'>Important</button>
            <button className='btn btn-secondary'>Acvtive</button>
        </div>
    );
};

export default Filter