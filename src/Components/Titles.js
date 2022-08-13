import React from "react";


import classes from "./Titles.module.css"



const Titles = () =>{

    return (
        <div className={classes.main}>
            <div>Name</div>
            <div className={classes.description}>Description</div>
            <div>Priority</div>
            <div>Loaded (H/M)</div>
            <div>Status</div>
        </div>
    )
}

export default Titles