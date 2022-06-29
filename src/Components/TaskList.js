

import classes from "./TaskList.module.css"
import Task from "./Task"


const TaskList = () => {

    return (
        <div className={classes.main}>
            <Task />
        </div>
    )
}

export default TaskList