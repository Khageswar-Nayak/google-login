import React from "react";
import "../App.css"

function Home({data}){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="home-page">
            <img src={data.photoURL} alt="profile image"/>
            <h3>hii {data.displayName}</h3>
            <p>your email is {data.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Home;