
import classes from './App.module.css';
import Titles from './Components/Titles';
import TaskList from './Components/TaskList';

const tasks = [
  {key: "001",name: "Eat",description: "xxx",time: Date.now(),status: "added"},
  {key: "002",name: "Sleep",description: "xxx",time: Date.now(),status: "In-progress"}
]

const App = () => {
  return (
    <div className={classes.main}>
      
      <Titles />
      <TaskList items={tasks}/>
    </div>
  )
}

export default App;
