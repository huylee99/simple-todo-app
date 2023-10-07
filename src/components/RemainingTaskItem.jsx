import { DeleteFilled, CheckCircleFilled } from "@ant-design/icons";
import { Avatar } from "antd";

import { Typography } from "antd";

const { Title } = Typography;

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

export default RemainingTaskItem;
