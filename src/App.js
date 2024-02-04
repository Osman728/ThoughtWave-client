import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost/SinglePost";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost"
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<CreatePost />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:postId" element={<SinglePost />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

