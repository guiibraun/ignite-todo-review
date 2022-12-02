import { useState } from 'react'
import { v4 as uuid } from 'uuid'
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
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuid(),
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: true,
    },
    {
      id: uuid(),
      title:
        'Ex cillum do pariatur ullamco culpa nulla reprehenderit deserunt cupidatat reprehenderit eu est., checked: false',
      checked: false,
    },
    {
      id: uuid(),
      title:
        'Aliqua voluptate cillum aliquip est ipsum deserunt pariatur ad proident ut.',
      checked: true,
    },
  ])

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc
  }, 0)

  function removeTask(id: string) {
    const taskListWithoutRemovedTask = tasks.filter((task) => task.id !== id)
    setTasks(taskListWithoutRemovedTask)
  }

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
              return (
                <TaskList key={task.id} task={task} onRemoveTask={removeTask} />
              )
            })}
          </TaskAreaContainer>
        </>
      ) : (
        <div>Nada encontrado</div>
      )}
    </TaskContainer>
  )
}
