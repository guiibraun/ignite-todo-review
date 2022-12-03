import { Task } from '../TaskArea'
import {
  CheckboxIndicator,
  CheckboxRoot,
  DeleteCommentButton,
  TaskForm,
  TaskLabel,
} from './styles'
import { Check, Trash } from 'phosphor-react'

interface TaskListProps {
  task: Task
  onRemoveTask: (id: string) => void
  onChangeCompletedTask: (id: string) => void
}

export function TaskList({
  task: { checked, id, title },
  onRemoveTask,
  onChangeCompletedTask,
}: TaskListProps) {
  function handleCheckChange() {
    onChangeCompletedTask(id)
  }

  function handleRemoveTask() {
    onRemoveTask(id)
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
