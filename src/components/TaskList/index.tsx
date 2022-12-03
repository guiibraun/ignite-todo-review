import { Task } from '../TaskArea'
import {
  CheckboxIndicator,
  CheckboxRoot,
  DeleteCommentButton,
  TaskForm,
  TaskLabel,
} from './styles'
import { Check, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { TaskContext } from '../../contexts/taskContext'

interface TaskListProps {
  task: Task
}

export function TaskList({ task: { checked, id, title } }: TaskListProps) {
  const { changeCompletedTask, removeTask } = useContext(TaskContext)

  function handleCheckChange() {
    changeCompletedTask(id)
  }

  function handleRemoveTask() {
    removeTask(id)
  }

  return (
    <TaskForm>
      <div>
        <CheckboxRoot
          onCheckedChange={handleCheckChange}
          defaultChecked={checked}
        >
          <CheckboxIndicator asChild>
            <Check />
          </CheckboxIndicator>
        </CheckboxRoot>
        <TaskLabel check={checked ? 'isChecked' : undefined}>{title}</TaskLabel>
      </div>

      <DeleteCommentButton
        title="Deletar Comentário"
        type="button"
        onClick={handleRemoveTask}
      >
        <Trash size={24} />
      </DeleteCommentButton>
    </TaskForm>
  )
}
