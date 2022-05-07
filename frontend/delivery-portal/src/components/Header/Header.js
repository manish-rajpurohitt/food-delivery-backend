import { Button } from '@mui/material'
import React from 'react'
import "./Header.css"
import Link from '@mui/material/Link';
import {useAuth} from "../../UserContext";
import { useNavigate } from 'react-router';


function Header() {
const {logout, login, loggedIn} = useAuth();
const navigate = useNavigate();

  return (
    <div className='header'>
      <h1>Delivery portal</h1>
      <div>
        {
          loggedIn?
          <>
          <Button onClick={()=>navigate("/Home")}>Home</Button>
          <Button onClick={()=>navigate("/Profile")}>Profile</Button>
          <Button onClick={()=>logout()}>Log out</Button>
          </> 
          : 
          <>
        <Link href="/SignIn">
          <Button >Log in</Button>
        </Link>
        <Link href="/SignUp">
          <Button>Sign up</Button>
        </Link>
        </>
        }
      </div>
    </div>
  )
}

export default Header