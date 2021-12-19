import { useState } from 'react'
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Task } from './interfaces/Task'


function App() {
  
  const [tasks, setTasks] = useState<Task[]>([])

  const currentId = ():number => new Date().getTime()

  const addANewTask = (task:Task):void => tasks ? setTasks([...tasks, {...task, completed:false,id: currentId() }]) : setTasks([task])

  const deleteTask = (id:number):void => setTasks(tasks?.filter(task =>task.id !== id))
    
  return (
    <div style={{ height:'100vh' }}>
      <Navbar
        title='React-Typescript' />
      <main className="container mh-100 p-4" >
        <div className="row">
          <div className="col-md-4">
            <TaskForm 
              addANewTask={addANewTask}
            />
          </div>
          <div className="col-md-8">
            <div className="row d-flex justify-content-center pt-4">
              {
                !tasks ?
                <h1 className="fw-bold text-uppercase text-center">no hay tareas en este momento</h1>
                : <TaskList 
                    tasks = { tasks } 
                    deleteTask={deleteTask}
                    /> 
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
