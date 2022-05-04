import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { Routes, Route, Link } from "react-router-dom";
import { CartProvider } from './CartContext';
import {useAuth} from './UserContext';

function App() {

  const {loggedIn} = useAuth(); 
  return (
    <CartProvider>
  <div className="App">
  <Header />
  <Routes>
    <Route path='/SignIn' element={<SignIn />}/>
    <Route path='/SignUp' element={<SignUp />}/>
    <Route path="/" element={<Body loggedIn={loggedIn}/>}/>
  </Routes>
  <Footer/>
</div>
</CartProvider>
  );
}

export default App;
