import classes from "./InputForm.module.css"

const InputForm = () =>{

    return (
        <div className={classes.main}>
            <label>Name</label>
            <input type="text" className={classes.input}/>

            <label>Description</label>
            <input type="text" className={classes.input}/>

            <label>Priority</label>
            <input type="text" className={classes.input}/>


            <label>Status</label>
            <input type="text" className={classes.input}/>
            <button className={classes.button}>ADD</button>
        </div>
    )
}

export default InputForm;