import React from 'react';

import './ListItem.css';

const ListItem = ({ item }) => {

    const dataStyle = {
        'text-decoration': 'none',
        'list-style': 'none'
    }
     dataStyle.color = item.important ? 'red' : '#000';
     dataStyle.textDecoration = item.isDone ? 'line-through' : 'none';
   

    return(
        <li style ={dataStyle}>
            {item.title}
            <button className='btn btn-danger'>
                <i className="fa fa-check"></i>
            </button>
            <button className='btn btn-info'>
                <i className='fa fa-remove'></i>
            </button>
        </li>
    );
};
export default ListItem


function hello({ kuku }){
    console.log(kuku);
}

let objecT = {
    kuku: 'Kuku'
};

hello(objecT);


let { kuku } = objecT;

let [ kuku1, chuchu ] = [1, 2, 45, 7 ,8 ];