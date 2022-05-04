import { Button } from '@mui/material'
import React from 'react'
import "./Header.css"
import Link from '@mui/material/Link';
import {useAuth} from "../../UserContext";


function Header() {
const {logout, login, loggedIn} = useAuth();

  console.log(loggedIn)
  return (
    <div className='header'>
      <h1>Delivery portal</h1>
      <div>
        {
          loggedIn?
          <>
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
        
        <Link href="/Cart">
        <Button>Cart</Button>
        <span>0</span>
        </Link>
      </div>
    </div>
  )
}

export default Header