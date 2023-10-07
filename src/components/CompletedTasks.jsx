import CompletedTaskItem from "./CompletedTaskItem";
import { Typography } from "antd";

const { Title } = Typography;

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

export default CompletedTasks;
