import React from 'react';
import ListItem from './../../components/ListItem/ListItem'

import './List.css';

const List = ({ listData }) => {
    const listItemData = listData.map((d) => {
        return <ListItem item={d} key={d.id} />;
    });
    
    return (
        <div className='ul'>
            <h3 className='list'>Lists</h3>
            <ul>
                { listItemData }
            </ul>
        </div>
    );
};
export default List