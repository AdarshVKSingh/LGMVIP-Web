

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './components/user_card';
import Nav from './components/Nav';




const App = () => {
    // const [userData, setData] = useState([{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" }]);
    const [userData, setData] = useState([]);
    const [click, setClick] = useState(0);

    const button = document.getElementById("user1");
    console.log(button);
    if(button!=null){
        button.addEventListener('click', () => {
            setClick(1);
        })
    
    }
    
    useEffect(() => {
        async function apiCall() {
            const res = await axios.get(`https://reqres.in/api/users?page=1`);

            setData(res.data.data);
        }
        apiCall();

    }, click);

    if (click == 0) {
        return (
            <></>
        )
    }



    return (
        <>
            {userData.map((val, ind) => {
                return (
                    <Card uid={val.id} uemail={val.email} ufirst={val.first_name} ulast={val.last_name} uimgSrc={val.avatar} />
                )
            })}
        </>
    )



    console.log(userData);


}

export default App;
