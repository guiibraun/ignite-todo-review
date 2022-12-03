import { useContext } from 'react'
import { TaskContext } from '../../contexts/taskContext'
import { TaskList } from '../TaskList'
import {
  TaskAreaContainer,
  TaskContainer,
  TaskCreatedAndCompleted,
  TaskInfo,
} from './styles'

export interface Task {
  id: string
  title: string
  checked: boolean
}

export function TaskArea() {
  const { tasks, completedTasks } = useContext(TaskContext)

  return (
    <TaskContainer>
      {tasks.length > 0 ? (
        <>
          <TaskCreatedAndCompleted>
            <TaskInfo colors="blue">
              Tarefas criadas <span>{tasks.length}</span>
            </TaskInfo>
            <TaskInfo colors="purple">
              Tarefas concluídas{' '}
              <span>
                {completedTasks} de {tasks.length}
              </span>
            </TaskInfo>
          </TaskCreatedAndCompleted>
          <TaskAreaContainer>
            {tasks.map((task) => {
              return <TaskList key={task.id} task={task} />
            })}
          </TaskAreaContainer>
        </>
      ) : (
        <div>Nada encontrado</div>
      )}
    </TaskContainer>
  )
}
