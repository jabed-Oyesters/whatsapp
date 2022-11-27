import {
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

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
            gap: "5px",
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
                  width: 35,
                  height: 35,
                  borderRadius: "100%",
                }}
                preview={false}
              />
            }
          />
          <Box>
            <Typography
              style={{
                backgroundColor: "#4e426d",
                borderRadius:
                  "0px 10px 10px 10px",
                padding: "2px 6px",
                textAlign: "right",
                marginTop: "20px",
                color: "white",
              }}
            >
              {message}
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                textAlign: "right",
                color: "black",
              }}
            >
              {" "}
              {date}
            </Typography>
          </Box>
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
          <div
            style={{
              maxWidth: "60%",
              color: "white",
            }}
          >
            <Typography
              style={{
                backgroundColor: "#4e426d",
                borderRadius: "10px 0 10px 10px",
                padding: "2px 6px",
                textAlign: "right",
              }}
            >
              {/* <strong style={{ fontSize: 13 }}>
              {user}
            </strong>{" "} */}

              {message}
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                textAlign: "right",
                color: "black",
              }}
            >
              {" "}
              {date}
            </Typography>
          </div>
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
