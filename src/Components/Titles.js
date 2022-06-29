import React from "react";


import classes from "./Titles.module.css"



const Titles = () =>{

    return (
        <div className={classes.main}>
            <div>Name</div>
            <div>Description</div>
            <div>Priority</div>
            <div>Hours/Minutes Added</div>
            <div></div>
        </div>
    )
}

export default Titles