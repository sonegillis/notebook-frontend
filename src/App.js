import { useState } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './route';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
