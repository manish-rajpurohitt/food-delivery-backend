import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import PasswordReset from './components/SignIn/PasswordReset';

import {useAuth} from './UserContext';
import ForgotPassword from './components/SignIn/ForgotPassword';

function App() {

  const {loggedIn} = useAuth(); 
  return (
  <div className="App">
  <Header />
  <div className='body'>
  <Routes>
    <Route path='/SignIn' element={<SignIn />}/>
    <Route path='/SignUp' element={<SignUp />}/>
    <Route path='/ForgotPassword' element={<ForgotPassword/>} />
    <Route path="/Home" element={<Home />}/>
    <Route path='/PasswordReset/:id' element={<PasswordReset />} />
    <Route path="/" element={<Body loggedIn={loggedIn}/>}/>
  </Routes>
  </div>
  <Footer/>
</div>
  );
}

export default App;
