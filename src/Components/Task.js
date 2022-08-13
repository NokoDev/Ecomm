import React from "react";

import classes from "./Task.module.css"



const Task = () =>{

    return (
        <div className={classes.main}>
            <div>Eat</div>
            <div className={classes.description}>Make breakfast</div>
            <div>High</div>
            <div>15h</div>
            <div>In-progress</div>
        </div>
    )
}

export default Task;