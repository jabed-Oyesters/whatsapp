import React, {
  useEffect,
  useState,
  useRef,
} from "react";
import "../App.css";
import socketIOClient from "socket.io-client";
import ChatBoxReciever, {
  ChatBoxSender,
} from "./ChatBox";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import LeftUser from "./LeftUser";

export default function ChatContainer() {
  let socketio = socketIOClient(
    "http://localhost:5001"
  );
  const [chats, setChats] = useState([]);
  console.log(chats);
  const [user, setUser] = useState(
    localStorage.getItem("user")
  );
  const avatar = localStorage.getItem("avatar");
  useEffect(() => {
    socketio.on("chat", (senderChats) => {
      setChats(senderChats);
    });
  });

  function sendChatToSocket(chat) {
    socketio.emit("chat", chat);
  }

  function addAMessage(chat) {
    const newChat = { ...chat, user, avatar };
    setChats([...chats, newChat]);
    sendChatToSocket([...chats, newChat]);
  }
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  }

  function ChatsList() {
    return (
      <div
        style={{
          height: "75vh",
          overflow: "scroll",
          overflowX: "hidden",
          backgroundColor: "#efeae2",
        }}
      >
        {chats.map((chat, index) => {
          if (chat.user === user)
            return (
              <ChatBoxSender
                key={index}
                message={chat.message}
                avatar={chat.avatar}
                user={chat.user}
              />
            );
          return (
            <ChatBoxReciever
              key={index}
              message={chat.message}
              avatar={chat.avatar}
              user={chat.user}
            />
          );
        })}
      </div>
    );
  }

  return (
  
    <Box sx={{ flexGrow: 1, p: 5 }}>
      {user ? (
        <Grid container spacing={3}>
          <Grid item xs>
            <LeftUser user={user} />
          </Grid>
          <Grid item xs={8}>
            <div style={{ marginRight: "40px" }}>
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent:
                        "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",

                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={avatar}
                        style={{
                          objectFit: "cover",
                          width: 35,
                          height: 35,
                          borderRadius: "100%",
                        }}
                        preview={false}
                      />
                      <h4
                        style={{ color: "gray" }}
                      >
                        {user}
                      </h4>
                    </div>

                    <p
                      onClick={() => logout()}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        border: "solid 1px gray",
                        padding: "5px",
                        borderRadius: "10px",
                        color: "gray",
                      }}
                    >
                      Log Out
                    </p>
                  </div>
                  <ChatsList />
                  <InputText
                    addMessage={addAMessage}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </Box>
  );
}
