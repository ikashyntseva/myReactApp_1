export const TASK_ADD = 'TASK_ADD'
export const TASK_INPUT = 'TASK_INPUT'

export function handleAddTask(task) {
  return {
    type: TASK_ADD,
    payload: task,
  }
}

export function inputTask(task) {
  return {
    type: TASK_INPUT,
    payload: task,
  }
}
