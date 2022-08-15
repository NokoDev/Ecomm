
import classes from './App.module.css';
import Titles from './Components/Titles';
import TaskList from './Components/TaskList';


const App = () => {
  return (
    <div className={classes.main}>
      
      <Titles />
      <TaskList />
    </div>
  )
}

export default App;
