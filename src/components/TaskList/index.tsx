import { Task } from '../TaskArea'
import {
  CheckboxIndicator,
  CheckboxRoot,
  DeleteCommentButton,
  TaskForm,
  TaskLabel,
} from './styles'
import { Check, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface TaskListProps {
  task: Task
  onRemoveTask: (id: string) => void
}

export function TaskList({
  task: { checked, id, title },
  onRemoveTask,
}: TaskListProps) {
  const [isChecked, setIsChecked] = useState(checked)

  /*   const { control } = useForm({
    defaultValues: {
      task: isChecked,
    },
  }) */

  function handleCheckChange() {
    setIsChecked((prevState) => !prevState)
  }

  function handleRemoveTask() {
    onRemoveTask(id)
  }

  useEffect(() => {
    console.log(isChecked)
  }, [isChecked])

  return (
    <TaskForm>
      {/*       <Controller
        control={control}
        name="task"
        render={({ field }) => {
          return (

          )
        }}
      /> */}

      <div>
        <CheckboxRoot
          onCheckedChange={handleCheckChange}
          defaultChecked={isChecked}
        >
          <CheckboxIndicator asChild>
            <Check />
          </CheckboxIndicator>
        </CheckboxRoot>
        <TaskLabel check={isChecked ? 'isChecked' : undefined}>
          {title}
        </TaskLabel>
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
