import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
  <div className="App">
  <h1>Welcome to React Router!</h1>
  <Routes>
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/SignIn" element={<SignIn />} />
  </Routes>
</div>
  );
}

export default App;
