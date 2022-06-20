

import classes from "./Head.module.css"



const Head = () => {

    return (
        <div>
            <h1 className={classes.title}>Manage your Tasks <span>Efficiently</span></h1>
            <h2>Hi, Welcome to the amazing one stop to manage your tasks.</h2>
            <h3>Lets get them all <span>Done!</span></h3>
        </div>
    )
}

export default Head