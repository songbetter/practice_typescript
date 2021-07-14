const ADD_TODO = "todo/ADD_TODO";
const REMOVE_TODO = "todo/REMOVE_TODO";

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: content,
});
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

type TodoAction = ReturnType<typeof addTodo> | ReturnType<typeof removeTodo>;

export type Todo = {
  id: number;
  content: string;
};

export type Todos = Todo[];

export const initialState: Todos = [
  {
    id: 0,
    content: "타입스크립트 리덕스",
  },
  {
    id: 1,
    content: "리액트",
  },
];

export default function todoReducer(
  state: Todos = initialState,
  action: TodoAction
): Todos {
  switch (action.type) {
    // case ADD_TODO:
    //   const id = Math.max(...state.map(todo => todo.id)) + 1;
    //   return state.concat({ id, content: action.payload });
    // case DELETE_TODO:
    //   return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
