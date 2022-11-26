import {
  Avatar,
  Grid,
  Typography,
} from "@mui/material";

const date = Date().slice(16, 21);

export default function ChatBoxReciever({
  avatar,
  user,
  message,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          // backgroundColor: "#e6e3e3",

          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Avatar
            size={50}
            src={
              <img
                src={avatar}
                style={{
                  objectFit: "cover",
                  width: 45,
                  height: 45,
                  borderRadius: "100%",
                }}
                preview={false}
              />
            }
          />
          <p
            style={{
              padding: 10,
              backgroundColor: "#dcf8c6",
              borderRadius: 10,
              maxWidth: "60%",
            }}
          >
            <strong style={{ fontSize: 13 }}>
              {user}
            </strong>{" "}
            <br></br>
            {message}
            <br></br>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChatBoxSender({
  avatar,
  user,
  message,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",

          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingRight: 10,
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              padding: 10,
              backgroundColor: "#4e426d",
              color: "white",
              borderRadius: 10,
              maxWidth: "60%",
            }}
          >
            <strong style={{ fontSize: 13 }}>
              {user}
            </strong>{" "}
            <br></br>
            {message}
            <br></br>
            <Typography variant="subtitle3">
              {" "}
              {date}
            </Typography>
          </p>
          {/* <Avatar
            size={50}
            src={
              <img
                src={avatar}
                style={{
                  marginLeft: "25px",
                  objectFit: "cover",
                  width: 30,
                  height: 30,
                  borderRadius: "100%",
                }}
                preview={false}
              />
            }
          /> */}
        </div>
      </div>
    </div>
  );
}
