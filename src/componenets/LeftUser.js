import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import React from "react";
import { Box } from "@mui/system";

const LeftUser = ({ user }) => {
  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "70%",
            borderRadius: "20px",
            boxShadow: 0,
          }}
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            inputProps={{
              "aria-label": "search google maps",
            }}
          />
        </Paper>
      </Grid>
      <img
        src="https://picsum.photos/200/300"
        style={{
          objectFit: "cover",
          width: 120,
          height: 120,
          borderRadius: "100%",
          marginTop: "40px",
        }}
        preview={false}
      />
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold" }}
      >
        {user}
      </Typography>
      <Typography variant="h5">
        Developer
      </Typography>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 4,
        }}
      >
        <Box>
          <MarkUnreadChatAltRoundedIcon
            sx={{
              fontSize: "40px",
              color: "#658FFF",
              padding: "15px",
              backgroundColor: "#dce4f9",
              borderRadius: "50%",
            }}
          />
          <Typography>Chat</Typography>
        </Box>
        <Box>
          <DuoRoundedIcon
            sx={{
              fontSize: "40px",
              color: "#658FFF",

              padding: "15px",
              backgroundColor: "#dce4f9",
              borderRadius: "50%",
            }}
          />
          <Typography>Video Call</Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          mt: 3,
        }}
      >
        <PeopleAltRoundedIcon />
        <Typography>View Friends</Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          mt: 3,
        }}
      >
        <FavoriteBorderRoundedIcon />
        <Typography>Add to Favorite</Typography>
      </Grid>
      <Typography sx={{ mt: 2, mb: 2 }}>
        Attachments
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Box>
          <PictureAsPdfRoundedIcon
            sx={{
              fontSize: "40px",
              color: "#658FFF",

              padding: "15px",
              backgroundColor: "#dce4f9",
            }}
          />
        </Box>
        <Box>
          <DuoRoundedIcon
            sx={{
              fontSize: "40px",
              color: "#658FFF",

              padding: "15px",
              backgroundColor: "#dce4f9",
            }}
          />
        </Box>
        <Box>
          <PhotoRoundedIcon
            sx={{
              fontSize: "40px",
              color: "#658FFF",

              padding: "15px",
              backgroundColor: "#dce4f9",
            }}
          />
        </Box>
      </Box>
      <Button
        sx={{ borderRadius: "100px", mt: 4 }}
        variant="outlined"
        size="small"
      >
        View All
      </Button>
    </div>
  );
};

export default LeftUser;
