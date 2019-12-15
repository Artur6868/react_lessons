import React from 'react';
import AddItem from '../AddItem/AddItem';
import List from '../List/List';
import Filter from '../Filter/Filter';

import './App.css';

const dataArr = [
    {
        id: 1,
        title: 'Todo list 1',
        isDone: true,
        important: false
    },
    {
        id: 2,
        title: 'Todo list 2',
        isDone: false,
        important: true
    },
    {
        id: 3,
        title: 'Todo list 3',
        isDone: false,
        important: false
    },
    {
        id: 4,
        title: 'Todo list 4',
        isDone: true,
        important: true
    },
]

const App = () => {
    return (
        <div className='box'>
            <h1 className='h1'>ToDo List</h1>
            <Filter />
            <List listData={dataArr} />
            <AddItem />
        </div>
    )
}

export default App;