import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import AppProvider from "./context/AppProvider";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<ChatRoom />}></Route>
          </Routes>
        </AppProvider>{" "}
      </AuthProvider>
    </>
  );
}

export default App;
