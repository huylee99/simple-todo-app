import { useReducer } from "react";
import "./App.css";
import { Typography, Row, Col } from "antd";
import RemainingTasks from "./components/RemainingTaskList";
import CompletedTasks from "./components/CompletedTasks";
import Form from "./components/TodoForm";

const { Title } = Typography;

const TODOS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};

const initialState = {
  todos: [],
};

// todo = {
//   id,
//   name,
//   status,
//   createdAt
// }

const reducer = (state, action) => {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TODOS.REMOVE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    case TODOS.COMPLETE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, status: "completed" };
          }
          return todo;
        }),
      };
  }
};

const addTodoAction = todo => ({
  type: TODOS.ADD_TODO,
  payload: todo,
});

const removeTodoAction = id => ({
  type: TODOS.REMOVE_TODO,
  payload: id,
});

const completeTodoAction = id => ({
  type: TODOS.COMPLETE_TODO,
  payload: id,
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const completedTasks = state.todos.filter(todo => todo.status === "completed");
  const remainingTasks = state.todos.filter(todo => todo.status === "pending");

  const handleAddTodo = todo => {
    dispatch(addTodoAction(todo));
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodoAction(id));
  };

  const handleCompleteTodo = id => {
    dispatch(completeTodoAction(id));
  };

  return (
    <>
      <Title level={2}>Todo App</Title>
      <Form handleAddTodo={handleAddTodo} />
      <Row justify={"space-between"}>
        <Col span={11}>
          <RemainingTasks remainingTasks={remainingTasks} handleCompleteTodo={handleCompleteTodo} handleRemoveTodo={handleRemoveTodo} />
        </Col>

        <Col span={11}>
          <CompletedTasks completedTasks={completedTasks} />
        </Col>
      </Row>
    </>
  );
}

export default App;
