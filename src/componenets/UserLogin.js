import React, { useState } from "react";
import _ from "lodash";
import { CommentOutlined } from "@mui/icons-material";

const button = {
  height: 50,
  fontWeight: "bold",
  borderRadius: 10,
  fontSize: 18,
  backgroundColor: "#658FFF",
  borderWidth: 0,
  color: "#fff",
  marginTop: "15px",
};

export default function UserLogin({ setUser }) {
  const [user, setAUser] = useState("");

  function handleSetUser() {
    if (!user) return;
    localStorage.setItem("user", user);
    setUser(user);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(
        1,
        1000
      )}/200/300`
    );
  }

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            <input
              style={{
                height: 30,
                fontSize: 15,
                paddingInline: 5,
                border: "none",
              }}
              value={user}
              onChange={(e) =>
                setAUser(e.target.value)
              }
              placeholder="Write a name"
            ></input>
            <button
              onClick={() => handleSetUser()}
              style={button}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
