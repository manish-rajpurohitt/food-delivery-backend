import { Button } from '@mui/material'
import React from 'react'
import "./Header.css"
import Link from '@mui/material/Link';
import {useAuth} from "../../UserContext";


function Header(props) {
const {logout, login} = useAuth();


  const {loggedIn} = {...props};
  console.log(loggedIn)
  return (
    <div className='header'>
      <h1>Delivery portal</h1>
      <div>
        {
          loggedIn?
          <>
          <Button onClick={logout()}>Log out</Button>
          </> 
          : 
          <>
        <Button onClick={login()}>Log in</Button>
        <Button>Sign up</Button>
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