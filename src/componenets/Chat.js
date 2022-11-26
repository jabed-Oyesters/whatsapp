import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Chat.css";
import { Typography } from "@mui/material";
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

const Chat = () => {
  const [getChat, setChat] = React.useState([]);

  console.log("get chat", getChat);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const chats = e.target.name.value;
    setChat(chats);
  };
  return (
    <Box
      sx={{ flexGrow: 1, p: 10, height: "100%" }}
    >
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Item>Name</Item>
          <Box
            sx={{
              height: "60vh",
              backgroundColor: "#ebf0ec",
            }}
          />
        </Grid>
        <Grid xs={8}>
          <Box sx={{ boxShadow: 3 }}>
            <Item>Chat</Item>
            <Box
              sx={{
                height: "60vh",
                backgroundColor: "#ddede1",
              }}
            >
              <Typography>{getChat}</Typography>
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

export default Chat;
