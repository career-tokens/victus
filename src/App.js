import './App.css';
import Disease from './components/Disease';
import Home from './components/Home';
import Login from './components/Login';
import Note from './components/Note';
import OpeningScreen from "./components/OpeningScreen";
//import { BrowserRouter, Routes, Route } from "react-router-dom"; it works for v5 version the one which is used in
//blogapp but in v6.4 stuff are diff

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route
        element={<OpeningScreen/>}
        path="/"
      />
      <Route
        element={<Login/>}
        path="/login"
        />  
      <Route
        element={<Home/>}
        path="/home"
        /> 
      <Route
        element={<Note/>}
        path="/note"
        /> 
      <Route
        element={<Disease/>}
        path="/disease"
        /> 
      </>  
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
