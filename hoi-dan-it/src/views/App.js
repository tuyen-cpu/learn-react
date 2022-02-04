import "./App.scss";
import TodoList from "./todo/TodoList";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Home from "./learn-routers/Home";
import Navbar from "./learn-routers/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </Router>

      {/* <TodoList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer /> */}
    </>
  );
}

export default App;
