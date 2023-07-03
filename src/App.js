import './App.css';
import Login from './components/Login';
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
      </>  
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
