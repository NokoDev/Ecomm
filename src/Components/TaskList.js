

import classes from "./TaskList.module.css"
import Task from "./Task"


const TaskList = (props) => {
const tasks = props.items

console.log(tasks)

    return (
        <div className={classes.main}>
            {props.items.map(item => <Task name={item.name} description={item.description} date={item.time} status={item.status} />)}
        </div>
    )
}

export default TaskList