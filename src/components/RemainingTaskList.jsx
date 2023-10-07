import RemainingTaskItem from "./RemainingTaskItem";
import { Typography } from "antd";

const { Title } = Typography;

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

export default RemainingTasks;
