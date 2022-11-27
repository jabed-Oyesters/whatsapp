import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const styles = {
  button: {
    width: "10%",
    height: 40,
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#658FFF",
    borderWidth: 0,
    color: "#fff",
  },
  textarea: {
    width: "100%",
    height: 30,
    borderWidth: 0,
    padding: 5,
    fontSize: 18,
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};

export default function InputText({
  addMessage,
}) {
  // console.log(date);

  const [message, setMessage] = useState("");

  function addAMessage() {
    addMessage({
      message,
    });
    setMessage("");
  }

  return (
    <div style={styles.textContainer}>
      <input
        style={styles.textarea}
        rows={6}
        placeholder="Write something..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      ></input>
      <button
        onClick={() => addAMessage()}
        style={styles.button}
      >
        <SendIcon />
      </button>
    </div>
  );
}
