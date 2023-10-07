import { Avatar } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

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

export default CompletedTaskItem;
