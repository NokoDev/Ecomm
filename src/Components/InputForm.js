import classes from "./InputForm.module.css"

const InputForm = () =>{

    return (
        <div className={classes.main}>
            <input type="text" className={classes.input}/>
            <button className={classes.button}>ADD</button>
        </div>
    )
}

export default InputForm;