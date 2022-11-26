import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Chat.css";
import {
  Avatar,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#1A2027"
      : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChatBox = ({ user, message, avatar }) => {
  const [getChat, setChat] = React.useState([]);
  console.log("get chat", getChat);
  const handleSubmit = (e) => {
    e.preventDefault();
    const chats = e.target.name.value;
    let chat1 = getChat;
    chat1.push({ chats });
    setChat(chat1);
  };
  return (
    <Box
      sx={{ flexGrow: 1, p: 10, height: "100%" }}
    >
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Box sx={{ boxShadow: 3 }}>
            <Item>Chat</Item>
            <Box
              sx={{
                height: "60vh",
                backgroundColor: "#ddede1",
              }}
            >
              <div className="chat-flex">
                <Avatar
                  alt="Cindy Baker"
                  src={avatar}
                />
                <div className="chat-area">
                  <div className="new-chat">
                    <h3>{user}</h3>
                    <p>{message}</p>
                  </div>
                </div>
              </div>
            </Box>
            <form
              onSubmit={handleSubmit}
              className="input-flex"
            >
              <input
                name="name"
                className="full-width"
              />
              <input type="submit" value="send" />
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatBox;
