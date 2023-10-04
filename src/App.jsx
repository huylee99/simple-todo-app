import { useState, useReducer } from "react";
import "./App.css";
import { Typography, Input, Row, Col, Avatar } from "antd";
import { DeleteFilled, CheckCircleFilled } from "@ant-design/icons";

const { Title } = Typography;

const TODOS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};

const initialState = [];

// todo = {
//   id,
//   name,
//   status,
//   createdAt
// }

const reducer = (state, action) => {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, action.payload];
    case TODOS.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TODOS.COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, status: "completed" };
        }
        return todo;
      });
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

  const completedTasks = state.filter(todo => todo.status === "completed");
  const remainingTasks = state.filter(todo => todo.status === "pending");

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

const Form = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  return (
    <div style={{ marginBottom: 24 }}>
      <Input
        onKeyUp={event => {
          if (event.key === "Enter") {
            if (value === "" || value.length < 5) {
              setError("Task name has at least 5 characters");
              return;
            }

            handleAddTodo({
              id: Math.floor(Math.random() * 10000),
              name: value,
              status: "pending",
              createdAt: new Date(),
            });

            setValue("");
          }
        }}
        value={value}
        placeholder="Type todo name, then press enter to add"
        onChange={event => {
          if (event.target.value.length > 5 && !!error) {
            setError(null);
          }

          setValue(event.target.value);
        }}
        style={{
          width: "500px",
          padding: "8px 16px",
          fontSize: "18px",
        }}
      />
      {error && (
        <p
          style={{
            color: "red",
            marginTop: 8,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

const RemainingTasks = ({ remainingTasks, handleCompleteTodo, handleRemoveTodo }) => {
  return (
    <div
      style={{
        width: "100%",
        color: "black",
        padding: 16,
        backgroundColor: "#f8faf7",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Title
        level={4}
        style={{
          textAlign: "left",
          margin: 0,
        }}
      >
        Remaining Task
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {remainingTasks.length > 0 && remainingTasks.map(task => <RemainingTaskItem key={task.id} handleCompleteTodo={handleCompleteTodo} handleRemoveTodo={handleRemoveTodo} task={task} />)}
      </div>
    </div>
  );
};

const RemainingTaskItem = ({ task, handleCompleteTodo, handleRemoveTodo }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Avatar
          style={{
            backgroundColor: "purple",
            verticalAlign: "middle",
            fontSize: 22,
            lineHeight: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          size="large"
        >
          {task.name.charAt(0)}
        </Avatar>
        <Title
          level={5}
          style={{
            margin: 0,
          }}
        >
          {task.name}
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <CheckCircleFilled
          onClick={() => handleCompleteTodo(task.id)}
          style={{
            color: "green",
            fontSize: 24,
            cursor: "pointer",
          }}
        />
        <DeleteFilled
          onClick={() => handleRemoveTodo(task.id)}
          style={{
            color: "red",
            fontSize: 24,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

const CompletedTasks = ({ completedTasks }) => {
  return (
    <div
      style={{
        width: "100%",
        color: "black",
        padding: 16,
        backgroundColor: "#f8faf7",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Title
        level={4}
        style={{
          textAlign: "left",
          margin: 0,
        }}
      >
        Completed Task
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {completedTasks.length > 0 && completedTasks.map(task => <CompletedTaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

const CompletedTaskItem = ({ task }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Avatar
          style={{
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            lineHeight: 0,
          }}
          size="large"
        >
          {task.name.charAt(0)}
        </Avatar>
        <div
          style={{
            textAlign: "left",
          }}
        >
          <Title
            style={{
              margin: 0,
              textAlign: "left",
              lineHeight: 1,
            }}
            level={5}
          >
            {task.name}
          </Title>
          <span
            style={{
              color: "gray",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            {task.createdAt.getHours()}:{task.createdAt.getMinutes()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
