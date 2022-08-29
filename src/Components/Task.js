import React from "react";

import classes from "./Task.module.css"



const Task = (props) =>{

    // console.log(props)
    return (
        <div className={classes.main}>
            <div>{props.name}</div>
            <div className={classes.description}>{props.description}</div>
            <div>High</div>
            <div>{props.time}</div>
            <div>{props.status}</div>
        </div>
    )
}

export default Task;