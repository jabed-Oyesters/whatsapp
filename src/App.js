import logo from "./logo.svg";
import "./App.css";
import Chat from "./componenets/Chat";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography sx={{ mt: 5,  fontWeight: 'bold' }}>
        WhatsApp
      </Typography>
      <Chat />
    </div>
  );
}

export default App;
