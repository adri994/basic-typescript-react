import React from 'react'
import { Task } from '../interfaces/Task';

interface Props {
  task: Task,
  deleteTask: (id:number) =>void
}

const TaskCard = ({ task,deleteTask }:Props) => {
  return (
    <div className='alert alert-primary active'>
      <h4 className="fw-bold">{ task.title }</h4>
      <p>{ task.description }</p>
      <button
        type="button"
        onClick={()=>task.id && deleteTask(task.id)}
        className="btn btn-danger fw-bold">Eliminar</button>
    </div>
  )
}

export default TaskCard
