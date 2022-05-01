import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {AuthContext, AuthProvider} from "./UserContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthProvider>
);