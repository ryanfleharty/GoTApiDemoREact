import React from 'react';

const House = (props) => {
    return(
        <div>
            <h4>{props.house.name} of {props.house.region}</h4>
            <p>{props.house.words}</p>
            <button onClick={()=>{
                props.deleteHouse(props.index);
            }}>DELETE THIS HOUSE FROM EXISTENCE</button>
        </div>
    )
}

export default House