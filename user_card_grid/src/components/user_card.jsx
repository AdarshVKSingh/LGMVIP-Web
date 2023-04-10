import React from 'react';
import './../card.css';

function Card(props) {
    return (
        <>
            <div className="card">
                <h1>Id :{props.uid}</h1>
                <h1>email :{props.uemail}</h1>
                <h1>First Name:{props.ufirst}</h1>
                <h1>Last name:{props.ulast}</h1>
                <img src={props.uimgSrc} alt="" />
            </div>

        </>
    )
}


export default Card;