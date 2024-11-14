import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './Componets/Dashboard';
import SignUp from './Componets/SignUp';
import SignIn from './Componets/SignIn';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}











