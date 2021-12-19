import React from 'react'
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Tasks {
  tasks: Task[],
  deleteTask: (id:number) =>void
}

const TaskList = ({ tasks, deleteTask }:Tasks) => {
  return (
    <>
      {
        tasks.map(task => (
          <div
            key={ task.id }
            className="col-md-4 text-center">
            <TaskCard  
              task={ task }
              deleteTask= {deleteTask}
              />
          </div>
        ))
      }
    </>
  )
}

export default TaskList
