import { Input } from "antd";
import { useState } from "react";

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

export default Form;
