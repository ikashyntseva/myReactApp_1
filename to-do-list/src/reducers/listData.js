import { TASK_ADD, TASK_INPUT } from "../actions/AddActions";

export const initialState = {
  tasks: [],
  name: ""
};

export function listDataReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_ADD:
      return {
        ...state,
        tasks: [...state.tasks, { name: state.name, id: ++state.tasks.length }],
        name: ""
      };
    case TASK_INPUT:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}
